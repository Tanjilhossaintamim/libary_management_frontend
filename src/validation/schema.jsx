import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(4).required(),
  phone: Yup.number().required(),
  college: Yup.string().min(6).required(),
  address: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password Must Match !"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
