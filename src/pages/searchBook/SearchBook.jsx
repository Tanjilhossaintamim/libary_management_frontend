import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBooks } from "../../redux/bookSlice";
import { Box, Container, Typography } from "@mui/material";
import BookCard from "../../components/common/bookCard/BookCard";
import { ToastContainer, toast } from "react-toastify";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";

const SearchBook = () => {
  const { books, is_loading } = useSelector((state) => state.book);
  const { query } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks(`api/books/?search=${query}`));
  }, [query]);

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
  return (
    <Container>
      <Typography>
        Search Result for : <span style={{ fontWeight: "bold" }}>{query}</span>
      </Typography>
      <Box sx={{ mt: "40px" }}>
        {books.length == 0 ? (
          <h1>No results was found !</h1>
        ) : is_loading ? (
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

export default SearchBook;
