import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Grid, Link } from "@material-ui/core";
import { Favorite as FavoriteIcon } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh - 134px)",
    textAlign: "center",
  },
}));

export default function AboutPage(props) {
  const theme = useTheme();
  const classes = useStyles();

  props.setTitle("About");

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <React.Fragment>
        <Typography variant="h6">About Pomodoro Timer</Typography>
        <Typography variant="body1" color="textSecondary">
          Pomodoro Timer is a web app that can assist you to manage your time using pomodoro technique. Thank you for using this app. May Allah bless you :)
        </Typography>
        <Typography
          variant="body1"
          style={{ marginTop: "2em" }}
          color="textSecondary"
        >
          Made with <FavoriteIcon fontSize="small" color="primary"/> by <Link href="https://instagram.com/mqad21" variant="body1">
            @mqad21
          </Link>
        </Typography>
      </React.Fragment>
    </Grid>
  );
}
