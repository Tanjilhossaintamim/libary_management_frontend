import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../utils/BaseUrl";

const initialState = {
  books: [],
  is_loading: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.is_loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.is_loading = false;
      state.books = action.payload;
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.is_loading = false;
    });
  },
});

export const fetchBooks = createAsyncThunk("book/get", async (endpoint) => {
  const header = {
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`,
    },
  };
  try {
    const response = await axios.get(`${BASEURL}/${endpoint}`, header);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ file: bookSlice.jsx:25 ~ fetchBooks ~ error:", error);
  }
});

export default bookSlice.reducer;
