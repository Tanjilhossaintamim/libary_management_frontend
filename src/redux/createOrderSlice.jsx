import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../utils/BaseUrl";

const initialState = {
  orderLoading: false,
};

const createOrderSlice = createSlice({
  name: "order/post",
  initialState,
});

export const placeOrder = createAsyncThunk("order/post", async (id) => {
  const header = {
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`,
    },
  };
  try {
    const response = await axios.post(
      `${BASEURL}/api/orders/`,
      {
        book_id: id,
      },
      header
    );
    console.log(response);
  } catch (error) {
    console.log(
      "🚀 ~ file: createOrderSlice.jsx:30 ~ placeOrder ~ error:",
      error
    );
  }
});

export default createOrderSlice.reducer;
