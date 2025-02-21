import * as yup from "yup";
import i18n from "../../../app/i18n";

export const signUpValidationSchema = yup
  .object({
    username: yup.string().min(2, i18n.t("signUp.fields.nameError")).required(),
    email: yup
      .string()
      .email(i18n.t("signUp.fields.invalidEmail"))
      .required(i18n.t("signUp.fields.emptyEmail")),
    password: yup
      .string()
      .min(6, i18n.t("signUp.fields.passwordError"))
      .required(),
  })
  .required();
