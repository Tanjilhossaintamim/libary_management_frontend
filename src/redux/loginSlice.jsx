import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../utils/BaseUrl";
import jwtDecode from "jwt-decode";

const initialState = {
  is_loading: false,
  token: null,
  userId: null,
  errorMessage: null,
  loggedInSuccess: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    check_login: (state, action) => {
      const expiredTime = localStorage.getItem("expTime");
      if (new Date() >= new Date(parseInt(expiredTime))) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("expTime");
      } else {
        state.token = localStorage.getItem("token");
        state.userId = localStorage.getItem("userId");
      }
    },
    logout: (state, action) => {
      state.token = null;
      state.userId = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("expTime");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.is_loading = true;
      state.errorMessage = null;
      state.loggedInSuccess = false;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.is_loading = false;
      state.errorMessage = null;
      state.token = action.payload.token;
      state.userId = action.payload.user_id;
      state.loggedInSuccess = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.is_loading = false;
      state.errorMessage = action.error.message;
      state.loggedInSuccess = false;
    });
  },
});

export const userLogin = createAsyncThunk("login/post", async (values) => {
  try {
    const response = await axios.post(`${BASEURL}/auth/jwt/create/`, values);

    const token = response.data.access;
    // decode token
    const { exp, user_id } = jwtDecode(token);
    // set all needed item to localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("expTime", exp * 1000);
    localStorage.setItem("userId", user_id);
    return { token: token, exp: exp, user_id: user_id };
  } catch (error) {
    throw new Error(error.response.data.detail);
  }
});

export const { check_login, logout } = loginSlice.actions;

export default loginSlice.reducer;
