import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../features/Home/homeSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;
