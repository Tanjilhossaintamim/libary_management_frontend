import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../utils/BaseUrl";

const initialState = {
  profileData: null,
  is_loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserProfileData.pending, (state, action) => {
      state.is_loading = true;
    });
    builder.addCase(getUserProfileData.fulfilled, (state, action) => {
      state.is_loading = false;
      state.profileData = action.payload;
    });
    builder.addCase(getUserProfileData.rejected, (state, action) => {
      state.is_loading = false;
    });
  },
});

export const getUserProfileData = createAsyncThunk("profile/get", async () => {
  const header = {
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`,
    },
  };
  try {
    const response = await axios.get(`${BASEURL}/api/customers/me/`, header);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export default profileSlice.reducer;
