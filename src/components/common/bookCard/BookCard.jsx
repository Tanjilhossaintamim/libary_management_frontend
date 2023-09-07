import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { placeOrder } from "../../../redux/createOrderSlice";
import { ToastContainer, toast } from "react-toastify";

const BookCard = ({ books, showtoast }) => {
  const dispatch = useDispatch();

  const handelPlaceOrder = (bookid) => {
    dispatch(placeOrder(bookid));
    showtoast();
  };

  return (
    <Grid container spacing={7}>
      {books.map((item) => {
        return (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={item.image}
                  alt={item.name}
                  title={item.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="medium"
                  color="primary"
                  variant="contained"
                  sx={{ bgcolor: "#02373C", ":hover": { bgcolor: "#02373C" } }}
                  onClick={() => handelPlaceOrder(item.id)}
                >
                  Place Order
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BookCard;
