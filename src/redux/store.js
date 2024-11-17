import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slices/counterSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
