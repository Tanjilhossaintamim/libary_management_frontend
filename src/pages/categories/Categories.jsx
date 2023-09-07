import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookCategory } from "../../redux/categorySlice";
import SelectCategory from "./SelectCategory";
import { fetchBooks } from "../../redux/bookSlice";
import { Box, Container } from "@mui/material";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";
import BookCard from "../../components/common/bookCard/BookCard";
import { ToastContainer, toast } from "react-toastify";

const Categories = () => {
  const { books, is_loading } = useSelector((state) => state.book);
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handelFetchCategoryBook = (categoryId) => {
    dispatch(fetchBooks(`api/books/?category=${categoryId}`));
  };
  useEffect(() => {
    dispatch(fetchBookCategory());
    dispatch(fetchBooks("api/books/?category=1"));
  }, []);

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
      <Box sx={{ width: "400px" }}>
        <SelectCategory
          categories={categories}
          handelFetchCategoryBook={handelFetchCategoryBook}
        />
      </Box>

      <Box sx={{ mt: "50px" }}>
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

export default Categories;
