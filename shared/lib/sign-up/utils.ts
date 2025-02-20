import * as yup from "yup";

export const signUpValidationSchema = yup
  .object({
    username: yup
      .string()
      .min(2, "Username should be at least 2 characters long")
      .required("Username is required"),
    email: yup
      .string()
      .email("Email is not correct")
      .required("Please enter your email address"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .required(),
  })
  .required();
