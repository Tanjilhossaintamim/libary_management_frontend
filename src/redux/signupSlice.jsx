import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../utils/BaseUrl";

const initialState = {
  is_loading: false,
  is_signup_success: false,
  errorMessage: null,

};

const signupSlice = createSlice({
  name: "singup",
  initialState,
  reducers: {
    removeSuccess: (state, action) => {
      state.is_signup_success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignup.pending, (state, action) => {
      state.is_loading = true;
    });
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.is_loading = false;
      state.is_signup_success = true;
    });
    builder.addCase(userSignup.rejected, (state, action) => {
      state.is_loading = false;
      state.errorMessage = action.error.message;
    });
  },
});

export const { removeSuccess } = signupSlice.actions;

export const userSignup = createAsyncThunk("signup/post", async (values) => {
  const userData = {
    email: values.email,
    password: values.password,
  };
  const profileData = {
    name: values.name,
    phone: values.phone,
    address: values.address,
    college: values.college,
  };
  try {
    const response = await axios.post(`${BASEURL}/auth/users/`, userData);
    if (response.status == 201) {
      const userId = response.data.id;
      profileData.user = userId;
      const profileCreateResponse = await axios.post(
        `${BASEURL}/api/customers/`,
        profileData
      );
      return profileCreateResponse.data;
    }
  } catch (error) {
    const key = Object.keys(error.response.data)[0];
    throw new Error(error.response.data[key]);
  }
});

export default signupSlice.reducer;
