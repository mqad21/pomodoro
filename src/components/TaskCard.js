import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  Typography,
  Card,
  CardActionArea,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ClickNHold from "react-click-n-hold";
import Context from "../store/Context";

export default function TaskCard(props) {
  const { state, actions } = useContext(Context);
  const useStyles = makeStyles({
    card: {
      marginBottom: "1em",
      width: "100%",
    },
    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      backgroundColor: "black",
      opacity: state.selectedTasks.includes(props.id) ? 0.1 : 0,
    },
  });
  const classes = useStyles();
  const { name, count } = props;
  const history = useHistory();

  const handleEndLongPress = (e, enough) => {
    e.preventDefault();
    var selectedTasks = state.selectedTasks;
    const emptySelectedTask = state.selectedTasks.length == 0;
    const index = selectedTasks.indexOf(props.id);
    const isSelected = index > -1;
    if (enough || (!emptySelectedTask && !isSelected)) {
      if (!selectedTasks.includes(props.id)) {
        selectedTasks.push(props.id);
        actions({
          type: "setState",
          payload: { ...state, selectedTasks: selectedTasks },
        });
      }
    } else {
      if (emptySelectedTask) {
        history.push(props.to);
      } else {
        if (isSelected) {
          selectedTasks.splice(index, 1);
          actions({
            type: "setState",
            payload: { ...state, selectedTasks: selectedTasks },
          });
        }
      }
    }
  };

  const handleStartLongPress = (e) => {};

  return (
    <ClickNHold
      time={0.25}
      onEnd={handleEndLongPress}
      onStart={handleStartLongPress}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Typography color="textSecondary">{count} pomodoro</Typography>
          </CardContent>
          <div className={classes.overlay}></div>
        </CardActionArea>
      </Card>
    </ClickNHold>
  );
}
