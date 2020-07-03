import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
  Switch,
} from "@material-ui/core";
import SmallDialog from "../SmallDialog";
import Context from "../../store/Context";

export default function SettingsPage(props) {
  props.setTitle("Settings");
  const { state, actions } = React.useContext(Context);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [settings, setSettings] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false);

  const handleMenu = (menu) => {
    setSettings(menu);
  };

  const settingsList = [
    {
      id: "pomodoro",
      name: "pomodoroTime",
      label: "Pomodoro Time",
      valueLabel: state.settings.pomodoroTime["pomodoro"] + " minutes",
      value: state.settings.pomodoroTime["pomodoro"],
      fieldType: "number",
    },
    {
      id: "shortBreak",
      name: "pomodoroTime",
      label: "Short Break Time",
      valueLabel: state.settings.pomodoroTime["shortBreak"] + " minutes",
      value: state.settings.pomodoroTime["shortBreak"],
      fieldType: "number",
    },
    {
      id: "longBreak",
      name: "pomodoroTime",
      label: "Long Break Time",
      valueLabel: state.settings.pomodoroTime["longBreak"] + " minutes",
      value: state.settings.pomodoroTime["longBreak"],
      fieldType: "number",
    },
    {
      id: "pomodoro",
      name: "statusMessage",
      label: "Pomodoro Message",
      valueLabel: state.settings.statusMessage["pomodoro"],
      value: state.settings.statusMessage["pomodoro"],
      fieldType: "text",
    },
    {
      id: "shortBreak",
      name: "statusMessage",
      label: "Short Break Message",
      valueLabel: state.settings.statusMessage["shortBreak"],
      value: state.settings.statusMessage["shortBreak"],
      fieldType: "text",
    },
    {
      id: "longBreak",
      name: "statusMessage",
      label: "Long Break Message",
      valueLabel: state.settings.statusMessage["longBreak"],
      value: state.settings.statusMessage["longBreak"],
      fieldType: "text",
    },
  ];

  React.useEffect(() => {
    if (settings != null) {
      setDialogOpen(true);
    }
  }, [settings]);

  const handleDarkMode = (e) => {
    actions({
      type: "setState",
      payload: {
        ...state,
        settings: {
          ...state.settings,
          darkMode: e.target.checked ? 1 : 0,
        },
      },
    });
  };

  const SettingsMenu = () =>
    settingsList.map((setting, idx) => {
      return (
        <React.Fragment>
          <Divider />
          <ListItem>
            <ListItemText
              primary={setting.label}
              secondary={setting.valueLabel}
              onClick={() => handleMenu(setting)}
            />
          </ListItem>
        </React.Fragment>
      );
    });

  const Dialog = () => {
    if (settings == null) {
      return null;
    }
    return (
      <SmallDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        type="settings"
        settings={settings}
      />
    );
  };

  return (
    <React.Fragment>
      <List>
        <ListItem>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <ListItemText primary="Dark Mode" />
            <Switch
              checked={state.settings.darkMode}
              onChange={handleDarkMode}
              color="primary"
              name="darkMode"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Grid>
        </ListItem>
        <SettingsMenu />
      </List>
      <Dialog />
    </React.Fragment>
  );
}
