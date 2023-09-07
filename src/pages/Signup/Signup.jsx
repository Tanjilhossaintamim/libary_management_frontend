import {
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupSchema } from "../../validation/schema";
import { useDispatch, useSelector } from "react-redux";
import { removeSuccess, userSignup } from "../../redux/signupSlice";

const initialValues = {
  name: "",
  phone: "",
  college: "",
  address: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const { is_loading, errorMessage, is_signup_success } = useSelector(
    (state) => state.signup
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        dispatch(userSignup(values));
      },
    });

  if (is_signup_success) {
    navigate("/login");
    dispatch(removeSuccess());
  }

  return (
    <Container component={"main"} maxWidth="xs" sx={{ padding: "10px" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: "bold", color: "#1F2937" }}
        >
          CREATE ACCOUNT
        </Typography>
        {errorMessage && (
          <Typography sx={{ color: "red" }}>{errorMessage}</Typography>
        )}

        <Box component={"form"} sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                fullWidth
                label="Name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.name && touched.name ? (
                <Typography sx={{ color: "red" }}>{errors.name}</Typography>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phone"
                fullWidth
                label="Phone"
                value={values.phone}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.phone && touched.phone ? (
                <Typography sx={{ color: "red" }}>{errors.phone}</Typography>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                value={values.address}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.address && touched.address ? (
                <Typography sx={{ color: "red" }}>{errors.address}</Typography>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="college"
                label="College"
                name="college"
                autoComplete="college"
                value={values.college}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.college && touched.college ? (
                <Typography sx={{ color: "red" }}>{errors.college}</Typography>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <Typography sx={{ color: "red" }}>{errors.email}</Typography>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <Typography sx={{ color: "red" }}>{errors.password}</Typography>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="new-password"
                onChange={handleChange}
                value={values.confirmpassword}
                onBlur={handleBlur}
              />
              {errors.confirmpassword && touched.confirmpassword ? (
                <Typography sx={{ color: "red" }}>
                  {errors.confirmpassword}
                </Typography>
              ) : null}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={is_loading ? true : false}
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#02373C",
              ":hover": { backgroundColor: "#02373C" },
            }}
          >
            {is_loading ? <CircularProgress color="success" /> : "Sign Up"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              Already have an account?
              <Link to={"/login"}>Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
