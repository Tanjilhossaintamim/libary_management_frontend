import { Grid, Skeleton } from "@mui/material";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <Grid container spacing={7}>
      <Grid item xs={12} md={6} lg={4}>
        <Skeleton variant="rounded" width={345} height={300} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Skeleton variant="rounded" width={345} height={300} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Skeleton variant="rounded" width={345} height={300} />
      </Grid>
    </Grid>
  );
};

export default LoadingSkeleton;
