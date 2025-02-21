import { ENV_VARS } from "@/shared/constants/env.const";
import { mockedAuthenticatedUserCredentials } from "@/shared/data/mocked-user";
import axios from "axios";
import * as yup from "yup";

export const loginValidationSchema = yup
  .object({
    email: yup.string().required("Please enter your email address"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .required(),
  })
  .required();

export type LoginCredentials = {
  email: string;
  password: string;
};

export const login = async (creds: LoginCredentials) => {
  const res = await axios.post(ENV_VARS.AUTH_API + "/login", {
    username: creds.email,
    password: creds.password,
  });

  return res.data;
};

export const checkUsername = (name: string) => {
  return name === mockedAuthenticatedUserCredentials.username;
};

export const checkUserPassword = (pass: string) => {
  return pass === mockedAuthenticatedUserCredentials.password;
};
