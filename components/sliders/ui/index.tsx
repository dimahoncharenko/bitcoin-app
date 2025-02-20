import clsx from "clsx";
import { ReactNode } from "react";
import { ScrollView } from "react-native";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Slider = ({ children, className }: Props) => {
  return (
    <ScrollView className={clsx("flex-row gap-4", className)} horizontal>
      {children}
    </ScrollView>
  );
};
