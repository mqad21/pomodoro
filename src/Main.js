import React from "react";
import clsx from "clsx";
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BottomNav from "./components/layout/BottomNav";
import TopBar from "./components/layout/TopBar";
import { Container, Box, CssBaseline } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import TaskListPage from "./components/pages/TaskListPage";
import TaskPage from "./components/pages/TaskPage";
import ManualTimerPage from "./components/pages/ManualTimerPage";
import SettingsPage from "./components/pages/SettingsPage";
import AboutPage from "./components/pages/AboutPage";
import Context from "./store/Context";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: "primary",
    flexGrow: 1,
    marginTop: "56px",
    padding: theme.spacing(3),
    paddingBottom: "56px",
    minHeight: "calc(100vh - 56px)",
  },
  padding0: {
    padding: 0,
  },
  bottomNav: {
    marginTop: "28px",
  },
}));

export default function Main() {
  const classes = useStyles();
  const theme = useTheme();
  const { state, actions } = React.useContext(Context);
  const location = useLocation().pathname.split("/")[1];
  const displayBack = ["task", "settings", "about"].includes(location);
  const [title, setTitle] = React.useState("Pomodoro Timer");

  const handleClickOutside = () => {
    if (state.selectedTasks.length != 0) {
      actions({
        type: "setState",
        payload: {
          ...state,
          selectedTasks: [],
        },
      });
    }
  };

  const Content = (props) => {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container
          className={clsx(
            classes.content,
            { [classes.padding0]: location == "settings" },
            { [classes.bottomNav]: props.bottomNav }
          )}
          onClick={handleClickOutside}
        >
          <Box my={2}>{props.component}</Box>
        </Container>
        {props.bottomNav ? <BottomNav location={location} /> : null}
      </React.Fragment>
    );
  };

  const getTitle = () => {
    if (!["", "timer"].includes(location)) {
      return title;
    } else {
      return "Pomodoro Timer";
    }
  };

  return (
    <React.Fragment>
      <TopBar displayBack={displayBack} title={getTitle()} />
      <Switch>
        <Route exact path="/">
          <Content
            bottomNav={true}
            component={<TaskListPage />}
            noMargin={false}
          />
        </Route>
        <Route exact path="/timer">
          <Content
            bottomNav={true}
            component={<ManualTimerPage />}
            noMargin={false}
          />
        </Route>
        <Route exact path="/task/:id">
          <Content
            bottomNav={false}
            component={<TaskPage setTitle={setTitle} noMargin={false} />}
          />
        </Route>
        <Route exact path="/settings">
          <Content
            bottomNav={false}
            component={<SettingsPage setTitle={setTitle} noMargin={true} />}
          />
        </Route>
        <Route exact path="/about">
          <Content
            bottomNav={false}
            component={<AboutPage setTitle={setTitle} noMargin={false} />}
          />
        </Route>
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}
