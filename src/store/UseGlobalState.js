import { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";
import { initDB } from "react-indexed-db";
import { DBConfig } from "../config/DBConfig";

initDB(DBConfig);

export default function useGlobalState() {
  const { getAll, add, deleteRecord, update } = useIndexedDB("tasks");

  const settings = JSON.parse(localStorage.getItem("settings")) || {};

  const pomodoroTimeSetting = settings.pomodoroTime || {};
  const statusMessageSetting = settings.statusMessage || {};
  const darkModeSetting = settings.darkMode || 0;

  const [state, setState] = useState({
    tasks: [],
    newTask: null,
    oldTaskId: null,
    selectedTasks: [],
    manualTimer: JSON.parse(localStorage.getItem("manualTimer")) || {
      status: "pomodoro",
      currentTime: pomodoroTimeSetting["pomodoro"] || 25,
      isStart: 0,
    },
    settings: {
      pomodoroTime: {
        pomodoro: pomodoroTimeSetting["pomodoro"] || 25,
        shortBreak: pomodoroTimeSetting["shortBreak"] || 5,
        longBreak: pomodoroTimeSetting["longBreak"] || 10,
      },
      statusName: {
        pomodoro: "Pomodoro",
        shortBreak: "Short Break",
        longBreak: "Long Break",
      },
      statusMessage: {
        pomodoro: statusMessageSetting["pomodoro"] || "Let's start and become productive.",
        shortBreak: statusMessageSetting["shortBreak"] || "Good job! let's take a short break.",
        longBreak: statusMessageSetting["longBreak"] || "Awesome! let's take a long break.",
      },
      notif: {
        pomodoro: {
          start: {
            title: "Pomodoro timer is set",
            body: "Keep focus, dude!",
          },
          end: {
            title: "Pomodoro timer has ended",
            body: "Take a break, dude!",
          },
        },
        shortBreak: {
          start: {
            title: "Short break timer is set",
            body: "Have fun, dude!",
          },
          end: {
            title: "Short break timer has ended",
            body: "Let's back work!",
          },
        },
        longBreak: {
          start: {
            title: "Long break timer is set",
            body: "Be happy, dude!",
          },
          end: {
            title: "Long break timer has ended",
            body: "Keep spirit!",
          },
        },
      },
      darkMode: darkModeSetting
    },
  });

  useEffect(() => {
    localStorage.setItem("settings", {
      ...settings,
      darkMode: state.settings.darkMode
    });
  }, [state.settings.darkMode]);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(state.settings));
  }, [state.settings]);

  useEffect(() => {
    localStorage.setItem("manualTimer", JSON.stringify(state.manualTimer));
  }, [state.manualTimer]);

  const updateTasks = () => {
    getAll().then((tasks) => {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].isStart == 0) {
          tasks[i].currentTime = state.settings.pomodoroTime[tasks[i].status];
          console.log(state.settings.pomodoroTime[tasks[i].status]);
        }
      }
      const currentTime =
        state.manualTimer.isStart == 0
          ? state.settings.pomodoroTime[state.manualTimer.status]
          : state.manualTimer.currentTime;
      setState({
        ...state,
        tasks: tasks,
        manualTimer: {
          ...state.manualTimer,
          currentTime,
        },
      });
    });
  };

  useEffect(() => {
    updateTasks();
  }, []);

  //update task
  useEffect(() => {
    if (state.updatedTask != null) {
      console.log({ ...state.updatedTask });
      update({ ...state.updatedTask }).then(
        (event) => {
          console.log("ID Generated: ", event.target);
          getAll().then((tasks) => {
            setState({ ...state, updatedTask: null, tasks: tasks });
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [state.updatedTask]);

  //insert new task
  useEffect(() => {
    if (state.newTask != null) {
      add({ ...state.newTask }).then(
        (event) => {
          console.log("ID Generated: ", event.target);
          getAll().then((tasks) => {
            setState({ ...state, newTask: null, tasks: tasks });
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [state.newTask]);

  //delete task
  useEffect(() => {
    if (state.oldTaskId != null) {
      state.oldTaskId.forEach((taskId) => {
        deleteRecord(taskId);
        getAll().then((tasks) => {
          setState({ ...state, oldTaskId: null, tasks: tasks });
        });
      });
    }
  }, [state.oldTaskId]);

  const actions = (action) => {
    const { type, payload } = action;
    switch (type) {
      case "setState":
        return setState(payload);
      default:
        return state;
    }
  };
  return { state, actions, updateTasks };
}
