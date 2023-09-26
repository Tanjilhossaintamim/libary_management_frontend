import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../utils/BaseUrl";

const initialState = {
  is_loading: false,
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBookCategory.pending, (state, action) => {
      state.is_loading = true;
    });
    builder.addCase(fetchBookCategory.fulfilled, (state, action) => {
      state.is_loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchBookCategory.rejected, (state, action) => {
      state.is_loading = false;
    });
  },
});

export const fetchBookCategory = createAsyncThunk("category/get", async () => {
  const header = {
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`,
    },
  };
  try {
    const response = await axios.get(`${BASEURL}/api/categories/`, header);
    return response.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: categorySlice.jsx:25 ~ fetchBookCategory ~ error:",
      error
    );
  }
});

export default categorySlice.reducer;
