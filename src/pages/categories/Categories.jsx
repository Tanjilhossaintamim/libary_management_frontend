import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookCategory } from "../../redux/categorySlice";

const Categories = () => {
  const { categories } = useSelector((state) => state.category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookCategory());
  }, []);
  
  return <div>Categories</div>;
};

export default Categories;
