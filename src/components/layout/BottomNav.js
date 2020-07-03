import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { List as ListIcon, Timer as TimerIcon} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: 'calc(100vw)',
    position: "fixed",
    bottom: 0,
  },
});

export default function BottomNav(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.location);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels={true}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Task List"
        value=""
        component={Link}
        to={"/"}
        icon={<ListIcon />}
      />
      <BottomNavigationAction
        label="Manual Timer"
        value="timer"
        component={Link}
        to={"/timer"}
        icon={<TimerIcon />}
      />
    </BottomNavigation>
  );
}
