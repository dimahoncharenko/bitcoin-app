import axios from "axios";
import * as yup from "yup";

import { ENV_VARS } from "@/shared/constants/env.const";
import { mockedAuthenticatedUserCredentials } from "@/shared/data/mocked-user";
import i18n from "../../../app/i18n";

export const loginValidationSchema = yup
  .object({
    email: yup.string().required(i18n.t("signIn.fields.emailError")),
    password: yup
      .string()
      .min(6, i18n.t("signIn.fields.passwordError"))
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
