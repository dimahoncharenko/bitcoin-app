import clsx from "clsx";
import { Image, ImageProps } from "react-native";

type Props = { className?: string } & Omit<ImageProps, "className">;

export const Badge = ({ className, ...props }: Props) => {
  return (
    <Image {...props} className={clsx("rounded-full size-11", className)} />
  );
};
