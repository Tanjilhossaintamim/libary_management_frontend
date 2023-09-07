import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileData } from "../../redux/profileSlice";
import {
  Box,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import LeftSideDashboard from "./LeftSideDashboard";
import RightSideDashboard from "./RightSideDashboard";
import OrderHistory from "./OrderHistory";
import { getCustomerOrder } from "../../redux/orderSlice";

const DashBord = () => {
  const { is_loading, profileData } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileData());
    dispatch(getCustomerOrder());
  }, []);
  return (
    <Container sx={{ padding: "20px 0" }}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
        <Grid container spacing={2} sx={{ mt: "20px" }}>
          {/* left side dashboard part  */}
          <Grid item lg={5} xs={12} md={12} sx={{ mb: "20px" }}>
            <LeftSideDashboard profileName={profileData?.name} />
          </Grid>
          {/* right side dashboard part  */}

          <Grid item lg={6} xs={12} md={12} sx={{ ml: "20px" }}>
            <RightSideDashboard profileData={profileData} />
          </Grid>
        </Grid>
      </Box>
      {/* order history  */}
      <Box sx={{ mt: "50px" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Ordered Books
        </Typography>
        <OrderHistory />
      </Box>
    </Container>
  );
};

export default DashBord;
