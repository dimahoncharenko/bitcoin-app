import { Alert as NativeAlert } from "react-native";

type Props = {
  title: string;
  errorMsg: string;
  text: string;
  handler?: () => void;
};

export const Alert = ({ title, errorMsg, text, handler }: Props) => {
  return NativeAlert.alert(title, errorMsg, [
    {
      text,
      onPress: handler,
    },
  ]);
};
