import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  profileData: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
});

export default profileSlice.reducer;
