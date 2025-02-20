import clsx from "clsx";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = {
  children: Text["props"]["children"];
} & TouchableOpacityProps;

export const BrandButton = ({ children, className, ...props }: Props) => {
  return (
    <TouchableOpacity
      {...props}
      className={clsx(
        "mt-auto bg-brand-orange-400 mx-4 rounded-2xl",
        className
      )}
    >
      <Text className="text-center text-white text-[15px] font-semibold py-3">
        {children}
      </Text>
    </TouchableOpacity>
  );
};
