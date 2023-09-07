import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import { loginSchema } from "../../validation/schema";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/loginSlice";
import { useSelector } from "react-redux";

const Login = () => {
  const { is_loading, errorMessage } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  // form handel using formik
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        dispatch(userLogin(values));
      },
    });

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", bgcolor: "#FAFAFA" }}
    >
      <CssBaseline />

      <Grid item xs={12} sm={8} md={5} elevation={6} square="true">
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Typography>sign in to access your accout</Typography>
          {errorMessage && (
            <Typography sx={{ color: "red" }}>{errorMessage}</Typography>
          )}
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <Typography sx={{ color: "red" }}>{errors.email}</Typography>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <Typography sx={{ color: "red" }}>{errors.password}</Typography>
            ) : null}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={is_loading ? true : false}
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#02373C",
                ":hover": { bgcolor: "#02373C" },
              }}
            >
              {is_loading ? <CircularProgress /> : "Sing In"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link>Forgot password?</Link>
              </Grid>
              <Grid item>
                Don't have an account?
                <Link to={"/register"}>Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://amathlib.netlify.app/static/media/login@4x.74e606bbe11ad42b512a.png)",
          backgroundRepeat: "no-repeat",

          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
};

export default Login;
