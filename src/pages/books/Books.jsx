import { Box, Container, Typography } from "@mui/material";
import Bookicon from "../../assets/icons8-open-book-100.png";
import React, { useEffect } from "react";
import BookCard from "../../components/common/bookCard/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/bookSlice";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";
import { ToastContainer, toast } from "react-toastify";

const Books = () => {
  const { books, is_loading } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  // this function will handel show toast funtionality if this function call then toast message will show
  const showtoast = () => {
    toast.success("order Placed succesfully !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  useEffect(() => {
    dispatch(fetchBooks("/api/books"));
  }, []);
  return (
    <Container>
      <div className="banner">
        <h3 className="bannerheading">Seminar Library of All Books</h3>
        <img
          src={Bookicon}
          style={{ width: "40px", height: "40px", margin: "0 auto" }}
        />
      </div>
      <Box sx={{ mt: "50px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
          Books In the Library:
        </Typography>
        {is_loading ? (
          <LoadingSkeleton />
        ) : (
          <BookCard books={books} showtoast={showtoast} />
        )}
      </Box>
      {/* for toast message  */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
};

export default Books;
