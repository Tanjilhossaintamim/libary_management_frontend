import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./signupSlice";
import loginSlice from "./loginSlice";
import profileSlice from "./profileSlice";
import orderSlice from "./orderSlice";
import sideBarActiveSlice from "./sideBarActiveSlice";
import bookSlice from "./bookSlice";

const store = configureStore({
  reducer: {
    signup: signupSlice,
    login: loginSlice,
    profile: profileSlice,
    order: orderSlice,
    sidebar: sideBarActiveSlice,
    book: bookSlice,
  },
});

export default store;
