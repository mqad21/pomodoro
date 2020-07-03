export const DBConfig = {
  name: "Pomodoro",
  version: 4,
  objectStoresMeta: [
    {
      store: "tasks",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name" },
        { name: "count", keypath: "count" },
        { name: "currentTime", keypath: "currentTime" },
        { name: "status", keypath: "status" },
        { name: "isStart", keypath: "isStart" },
      ],
    },
  ],
};
