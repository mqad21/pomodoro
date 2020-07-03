import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Context from "../../store/Context";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import {
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Replay as ResetIcon,
} from "@material-ui/icons";
import ControlButton from "../ControlButton";
import Timer from "react-compound-timer";
import { showNotif } from "../../helper/showNotif";
import useSound from 'use-sound';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh - 134px)",
    textAlign: "center",
  },
  card: {
    width: "100%",
  },
  timer: {
    width: "100%",
    fontSize: "6em",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonGroup: {
    marginTop: "1.5em",
  },
  button: {
    lineHeight: 1.2,
  },
}));

export default function ManualTimerPage() {
  const theme = useTheme();
  const classes = useStyles();
  const { state, actions } = React.useContext(Context);
  const manualTimer = state.manualTimer;
  const [isPlay, setIsPlay] = React.useState(false);
  const ended = React.useRef(false);
  const alarm = 'https://mqad21.github.io/pomodoro/assets/alarm.mp3';
  const beep = 'https://mqad21.github.io/pomodoro/assets/beep.mp3';

  const [play, { stop }] = useSound(alarm);
  const [playBeep, { stopBeeb }] = useSound(beep);

  const updateCurrentTime = (time, isStart) => {
    if (time < 0) time = 0;
    actions({
      type: "setState",
      payload: {
        ...state,
        manualTimer: {
          ...manualTimer,
          currentTime: time,
          isStart: isStart,
        },
      },
    });
  };

  const changeStatus = (status) => {
    if (manualTimer.status != status) {
      actions({
        type: "setState",
        payload: {
          ...state,
          manualTimer: {
            ...manualTimer,
            status: status,
            currentTime: state.settings.pomodoroTime[status],
          },
        },
      });
    }
  };

  const timer = ({ start, pause, stop, getTime, setTime }) => {
    if (getTime() < 0 && !ended.current) {
      ended.current = true;
      setIsPlay(false);
      showNotif(manualTimer.status, false, state.settings.notif);
      play();
      const time = state.settings.pomodoroTime[manualTimer.status];
      updateCurrentTime(time, 0);
    }

    const handleStart = () => {
      playBeep();
      ended.current = false;
      start();
      setIsPlay(true);
      showNotif(manualTimer.status, true, state.settings.notif);
    };

    const handleReset = () => {
      const time = state.settings.pomodoroTime[manualTimer.status];
      updateCurrentTime(time, 0);
      setTime(time*60*1000);
      setIsPlay(false);
    };

    const handlePause = () => {
      updateCurrentTime(getTime() / (60*1000), 1);
      setIsPlay(false);
      pause();
    };

    return (
      <React.Fragment>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography className={classes.timer}>
              <Timer.Minutes />
              {":"}
              <Timer.Seconds />
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.buttons}
            >
              <ControlButton
                hide={isPlay}
                icon={PlayIcon}
                click={handleStart}
              />
              <ControlButton
                hide={!isPlay}
                icon={PauseIcon}
                click={handlePause}
              />
              <ControlButton
                hide={isPlay}
                icon={ResetIcon}
                click={handleReset}
              />
            </Grid>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  };

  const toPomodoro = () => {
    changeStatus("pomodoro");
  };

  const toShortBreak = () => {
    changeStatus("shortBreak");
  };

  const toLongBreak = () => {
    changeStatus("longBreak");
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h4">
            {state.settings.statusName[manualTimer.status]}
          </Typography>
          <Typography variant="subtitle" color="textSecondary">
            {state.settings.statusMessage[manualTimer.status]}
          </Typography>
        </CardContent>
      </Card>
      <Timer
        startImmediately={false}
        initialTime={
          manualTimer == undefined ? 0 : manualTimer.currentTime * 60 * 1000
        }
        direction="backward"
        lastUnit="m"
        formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
      >
        {timer}
      </Timer>
      <ButtonGroup
        className={classes.buttonGroup}
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={toPomodoro}
          variant={manualTimer.status == "pomodoro" ? "contained" : "outlined"}
          className={classes.button}
        >
          Pomodoro
        </Button>
        <Button
          onClick={toShortBreak}
          variant={
            manualTimer.status == "shortBreak" ? "contained" : "outlined"
          }
          className={classes.button}
        >
          Short Break
        </Button>
        <Button
          onClick={toLongBreak}
          variant={manualTimer.status == "longBreak" ? "contained" : "outlined"}
          className={classes.button}
        >
          Long Break
        </Button>
      </ButtonGroup>
    </Grid>
  );
}
