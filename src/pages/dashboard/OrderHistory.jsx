import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomerOrder } from "../../redux/orderSlice";

export default function OrderHistory() {
  const { orders } = useSelector((state) => state.order);
  console.log(orders);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: "#02373C", color: "#fff" }}>
          <TableRow sx={{ color: "#fff" }}>
            <TableCell sx={{ color: "#fff" }}>Book Name</TableCell>
            <TableCell sx={{ color: "#fff" }} align="right">
              Category
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="right">
              Quantity
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="right">
              Order Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.length != 0 &&
            orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.book.name}
                </TableCell>
                <TableCell align="right">{order.book.category.name}</TableCell>
                <TableCell align="right">{order.quantity}</TableCell>
                <TableCell align="right">
                  {new Date(order.placed_at).toDateString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}