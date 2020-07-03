import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  ListItemIcon,
  Menu,
} from "@material-ui/core";
import {
  MoreVert,
  Delete,
  ArrowBack,
  Settings as SettingIcon,
  Info as AboutIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Context from "../../store/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  listItem: {
    minWidth: "36px",
  },
}));

export default function TopBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { state, actions } = useContext(Context);
  const history = useHistory();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openSettings = () => {
    handleClose();
    history.push("/settings")
  };

  const openAbout = () => {
    handleClose();
    history.push("/about")
  };

  const handleDelete = () => {
    actions({
      type: "setState",
      payload: {
        ...state,
        oldTaskId: state.selectedTasks,
        selectedTasks: [],
      },
    });
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            style={{ display: props.displayBack ? "" : "none" }}
            color="inherit"
            aria-label="open drawer"
            onClick={handleBack}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="delete"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDelete}
                color="inherit"
                style={{
                  display: state.selectedTasks.length == 0 ? "none" : "",
                }}
              >
                <Delete />
              </IconButton>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={{
                  display:
                    state.selectedTasks.length != 0 || props.displayBack
                      ? "none"
                      : "",
                }}
              >
                <MoreVert />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                  <MenuItem onClick={openSettings}>
                    <ListItemIcon className={classes.listItem}>
                      <SettingIcon fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={openAbout}>
                    <ListItemIcon className={classes.listItem}>
                      <AboutIcon fontSize="small" />
                    </ListItemIcon>
                    About
                  </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
