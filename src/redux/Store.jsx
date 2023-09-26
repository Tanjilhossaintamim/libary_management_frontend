import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "./signupSlice";
import loginSlice from "./loginSlice";
import profileSlice from "./profileSlice";
import orderSlice from "./orderSlice";
import sideBarActiveSlice from "./sideBarActiveSlice";
import bookSlice from "./bookSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    signup: signupSlice,
    login: loginSlice,
    profile: profileSlice,
    order: orderSlice,
    sidebar: sideBarActiveSlice,
    book: bookSlice,
    category: categorySlice,
  },
});

export default store;
