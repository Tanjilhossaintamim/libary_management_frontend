import { Box, Container } from "@mui/material";
import Bookicon from "../../assets/icons8-open-book-100.png";
import React from "react";

const Books = () => {
  return (
    <Container>
      <div className="banner">
        <h3 className="bannerheading">Seminar Library of All Books</h3>
        <img
          src={Bookicon}
          style={{ width: "40px", height: "40px", margin: "0 auto" }}
        />
      </div>
    </Container>
  );
};

export default Books;
