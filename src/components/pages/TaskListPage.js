import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TaskCard from "../TaskCard";
import Context from "../../store/Context";
import { Grid, Typography, Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import SmallDialog from "../SmallDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 125px)",
    textAlign: "center",
  },
  img: {
    width: "10em",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(9),
    right: theme.spacing(2),
    zIndex: "2",
  },
}));

export default function TaskListPage() {
  const classes = useStyles();
  const theme = useTheme();
  const { state, actions } = React.useContext(Context);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const TaskList = () => {
    if (state.tasks.length == 0) {
      return (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/no-data.png"}
            className={classes.img}
          />
          <Typography
            gutterBottom
            variant="subtitle1"
            style={{ opacity: 0.75 }}
          >
            No Current Task
          </Typography>
        </Grid>
      );
    } else {
      return state.tasks.map((task, index) => {
        return (
          <TaskCard
            key={task.id}
            id={task.id}
            name={task.name}
            count={task.count}
            to={"/task/" + task.id}
          />
        );
      });
    }
  };

  const handleFab = () => {
    setDialogOpen(true);
  };

  return (
    <React.Fragment>
      <TaskList/>
      <Fab
        className={classes.fab}
        color="primary"
        aria-label="add"
        onClick={handleFab}
      >
        <AddIcon />
      </Fab>
      <SmallDialog open={dialogOpen} setOpen={setDialogOpen} type="newTask" />
    </React.Fragment>
  );
}
