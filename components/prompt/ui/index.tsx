import { AlertButton, Alert as NativeAlert } from "react-native";

type Props = {
  title: string;
  errorMsg: string;
  cancel: AlertButton;
  confirm: AlertButton;
};

export const Prompt = ({ title, errorMsg, cancel, confirm }: Props) => {
  return NativeAlert.prompt(title, errorMsg, [cancel, confirm]);
};
