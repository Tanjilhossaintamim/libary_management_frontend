import { Box, Container, Typography } from "@mui/material";
import Bookicon from "../../assets/icons8-open-book-100.png";
import React, { useEffect } from "react";
import BookCard from "../../components/common/bookCard/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/bookSlice";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";

const Books = () => {
  const { books, is_loading } = useSelector((state) => state.book);

  const dispatch = useDispatch();
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
        {is_loading ? <LoadingSkeleton /> : <BookCard books={books} />}
      </Box>
    </Container>
  );
};

export default Books;
