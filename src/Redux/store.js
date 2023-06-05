import { configureStore } from "@reduxjs/toolkit";
import labelReducer from "./Slices/slice1";

export const store = configureStore({
  reducer: {
    input: labelReducer,
  },
});
