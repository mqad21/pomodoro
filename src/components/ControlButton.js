import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { IconButton, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hide: {
    display: "none",
  },
}));

export default function ControlButton(props) {
  const theme = useTheme();
  const classes = useStyles();
  const Icon = props.icon;

  if (props.hide) return null;
  if (props.nav) {
      return (
        <Box>
          <IconButton disabled={props.nav.disabled} style={{opacity: props.nav.disabled ? .5 : 1}}>
            <Icon color="secondary" onClick={props.click} />
          </IconButton>
        </Box>
      )
  } else {
    return (
        <Box borderRadius="50%" borderColor="primary.main" border={1} margin={1}>
          <IconButton>
            <Icon fontSize="large" color="primary" onClick={props.click} />
          </IconButton>
        </Box>
      );
  }
}
