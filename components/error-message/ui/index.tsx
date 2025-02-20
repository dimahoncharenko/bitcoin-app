import clsx from "clsx";
import { Text } from "react-native";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const ErrorMessage = ({
  className,
  children = "This field is required!",
}: Props) => {
  return (
    <Text className={clsx("absolute text-red-500", className)}>{children}</Text>
  );
};
