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

const DashBord = () => {
  const { is_loading, profileData } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileData());
  }, []);
  return (
    <Container sx={{ padding: "20px 0" }}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
        <Grid container spacing={2} sx={{ mt: "20px" }}>
          {/* left side dashboard part  */}
          <Grid lg={6}>
            <LeftSideDashboard profileName={profileData?.name} />
          </Grid>
          {/* right side dashboard part  */}

          <Grid lg={6}>df</Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DashBord;
