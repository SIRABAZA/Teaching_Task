import { configureStore } from "@reduxjs/toolkit";
import teachersReducer from "../features/teachers/teachersSlice";

const store = configureStore({
  reducer: {
    teachers: teachersReducer,
  },
});

export default store;
