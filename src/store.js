// store.js
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskSlice.js";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
