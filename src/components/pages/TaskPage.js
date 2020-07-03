import React from "react";
import Context from "../../store/Context";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
} from "@material-ui/core";
import {
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Replay as ResetIcon,
  FastForward as ForwardIcon,
  FastRewind as RewindIcon,
} from "@material-ui/icons";
import Timer from "react-compound-timer";
import ControlButton from "../ControlButton";
import { useParams, Redirect } from "react-router-dom";
import { useIndexedDB } from "react-indexed-db";
import { showNotif } from "../../helper/showNotif";
import useSound from 'use-sound';
import alarm from '../../assets/alarm.mp3';

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
  count: {
    marginTop: "2em",
  },
}));

export default function TaskPage(props) {
  const { state, actions, updateTasks } = React.useContext(Context);
  const theme = useTheme();
  const classes = useStyles();
  const [error, setError] = React.useState(false);
  const [isPlay, setIsPlay] = React.useState(false);
  const id = useParams().id;
  const { update } = useIndexedDB("tasks");
  const task = state.tasks.filter((task)=>{
    return task.id == id;
  })[0];
  console.log(task);
  const ended = React.useRef(false);
  const [play, { stop }] = useSound(alarm);

  const updateTask = (updatedTask) => {
    update(updatedTask).then((e) => {
      updateTasks();
    });
  };

  const updateCurrentTime = (time, isStart) => {
    if (time < 0) time = 0;
    const updatedTask = {
      ...task,
      id: parseInt(id),
      currentTime: time,
      isStart: isStart
    };
    updateTask(updatedTask);
  };

  const changeStatus = (to, callback, forward) => {
    let count;
    if (forward) {
      count =
        to != "pomodoro" ? parseInt(task.count) + 1 : parseInt(task.count);
    } else {
      count =
        to == "pomodoro" ? parseInt(task.count) - 1 : parseInt(task.count);
    }

    updateTask({
      ...task,
      id: parseInt(id),
      currentTime: state.settings.pomodoroTime[to],
      status: to,
      count: count,
      isStart: 0,
    });
    setTimeout(() => {
      callback(state.settings.pomodoroTime[to]*60*1000);
    }, 200);
  };

  const nextStatus = (callback) => {
    const longBreak = (task.count + 1) % 4 == 0;
    console.log(longBreak);
    if (task.status == "pomodoro") {
      if (longBreak) {
        changeStatus("longBreak", callback, true);
      } else {
        changeStatus("shortBreak", callback, true);
      }
    } else {
      changeStatus("pomodoro", callback, true);
    }
  };

  const backStatus = (callback) => {
    const longBreak = (task.count) % 4 == 0;
    if (task.status == "pomodoro") {
      if (longBreak) {
        changeStatus("longBreak", callback, false);
      } else {
        changeStatus("shortBreak", callback, false);
      }
    } else {
      changeStatus("pomodoro", callback, false);
    }
  };

  const timer = ({ start, pause, stop, getTime, setTime }) => {
    if (getTime() < 0 && !ended.current) {
      play();
      ended.current = true;
      setIsPlay(false);
      nextStatus(setTime);
      showNotif(task.status, false,state.settings.notif);
    }

    const handleStart = () => {
      stop();
      ended.current = false;
      start();
      setIsPlay(true);
      showNotif(task.status, true,state.settings.notif);
    };

    const handleReset = () => {
      const time = state.settings.pomodoroTime[task.status];
      updateCurrentTime(time, 0);
      setTime(time*60*1000);
      setIsPlay(false);
    };

    const handlePause = () => {
      updateCurrentTime(getTime() / (60*1000), 1);
      setIsPlay(false);
      pause();
    };

    const handleNext = () => {
      nextStatus(setTime);
    };

    const handleBack = () => {
      backStatus(setTime);
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
                icon={RewindIcon}
                click={handleBack}
                nav={{ disabled: task.count == 0 }}
              />
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
              <ControlButton
                hide={isPlay}
                icon={ForwardIcon}
                click={handleNext}
                nav={{ disabled: false }}
              />
            </Grid>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  };

  if (error) return <Redirect to="/" />;

  if (task == undefined) return null;

  props.setTitle(task.name);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <React.Fragment>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography variant="h4">{state.settings.statusName[task.status]}</Typography>
            <Typography variant="subtitle" color="textSecondary">
              {state.settings.statusMessage[task.status]}
            </Typography>
          </CardContent>
        </Card>
        <Timer
          startImmediately={false}
          initialTime={task == undefined ? 0 : task.currentTime*60*1000}
          direction="backward"
          lastUnit="m"
          formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
        >
          {timer}
        </Timer>
        <Chip
          color="primary"
          avatar={<Avatar>{task.count}</Avatar>}
          label="Pomodoro"
          className={classes.count}
        />
      </React.Fragment>
    </Grid>
  );
}
