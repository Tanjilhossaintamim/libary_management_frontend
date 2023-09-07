import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  activeBar: "Dashboard",
};

const slidebarActiveSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changesidebar: (state, action) => {
      state.activeBar = action.payload;
    },
  },
});

export const { changesidebar } = slidebarActiveSlice.actions;
export default slidebarActiveSlice.reducer;
