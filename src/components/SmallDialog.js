import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Context from "../store/Context";

export default function SmallDialog(props) {
  const { open, setOpen, type } = props;
  const [value, setValue] = React.useState("");
  const { state, actions, updateTasks } = useContext(Context);
  const [element, setElement] = React.useState({
    title: null,
    component: null,
    handleSave: null,
    saveText: null,
  });

  const handleClose = () => {
    setValue("");
    setOpen(false);
  };

  const handleInputChange = (e) => {
    if (type == "settings") {
      if (props.settings.fieldType == "number") {
        if (e.target.value < 100 && e.target.value > 0) {
          setValue(e.target.value);
        } else {
          setValue("");
        }
      } else {
        if (e.target.value.length <= 48) {
          setValue(e.target.value);
        }
      }
    } else {
      if (e.target.value.length <= 18) {
        setValue(e.target.value);
      }
    }
  };

  React.useEffect(() => {
    console.log(props.idMenu);
    switch (type) {
      case "newTask":
        setElement({
          title: "New Task",
          component: ({ value }) => (
            <React.Fragment>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Task Name"
                type="text"
                fullWidth
                value={value}
                onChange={handleInputChange}
              />
            </React.Fragment>
          ),
          saveText: "Create",
          handleSave: (val) => {
            actions({
              type: "setState",
              payload: {
                ...state,
                newTask: {
                  name: val,
                  count: 0,
                  currentTime: state.settings.pomodoroTime["pomodoro"],
                  status: "pomodoro",
                  isStart: 0
                },
              },
            });
            handleClose();
          },
        });
        break;
      case "settings":
        const { settings } = props;
        setValue(
          settings.value
        );
        setElement({
          title: settings.label,
          component: ({ value }) => (
            <React.Fragment>
              <TextField
                autoFocus
                margin="dense"
                id={settings.name}
                label={settings.label}
                type={settings.fieldType}
                fullWidth
                value={value}
                onChange={handleInputChange}
              />
            </React.Fragment>
          ),
          saveText: "Save",
          handleSave: (val) => {
            const settingsObj = { ...state.settings };
            settingsObj[settings.name][settings.id] = settings.fieldType == "number" ? parseInt(val) : val;
            actions({
              type: "setState",
              payload: {
                ...state,
                settings: settingsObj,
              },
            });
            updateTasks();
            handleClose();
          },
        });
    }
  }, []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{element.title}</DialogTitle>
      <DialogContent>
        <element.component value={value} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          disabled={value == ""}
          onClick={() => element.handleSave(value)}
          color="primary"
        >
          {element.saveText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
