import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../utils/BaseUrl";

const initialState = {
  orders: [],
  is_loading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCustomerOrder.pending, (state, action) => {
      state.is_loading = true;
    });
    builder.addCase(getCustomerOrder.fulfilled, (state, action) => {
      state.is_loading = false;
      state.orders = action.payload;
    });

    builder.addCase(getCustomerOrder.rejected, (state, action) => {
      state.is_loading = false;
    });
  },
});

export const getCustomerOrder = createAsyncThunk("order/get", async () => {
  const header = {
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`,
    },
  };
  try {
    const response = await axios.get(`${BASEURL}/api/orders/`, header);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export default orderSlice.reducer;
