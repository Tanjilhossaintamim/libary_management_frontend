import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./signupSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    signup: signupSlice,
    login: loginSlice,
  },
});

export default store;
