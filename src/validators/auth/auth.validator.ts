import * as Yup from "yup";

export const signUpValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please Enter a Valid Email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter a Valid Email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
