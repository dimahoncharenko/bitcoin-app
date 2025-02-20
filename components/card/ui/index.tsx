import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import clsx from "clsx";
import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  classNames?: Partial<{
    container: string;
    subtext: string;
    iconContainer: string;
  }>;
  content: string;
  subtext: string;
  arrowRightIcon?: ReactNode;
  icon?: ReactNode;
};

export const Card = ({
  classNames,
  content,
  subtext,
  arrowRightIcon,
  icon,
}: Props) => {
  return (
    <View
      className={clsx(
        "bg-brand-gray-700 p-4 w-[233px] rounded-2xl h-[152px]",
        classNames?.container
      )}
    >
      <View className="flex-row gap-3 items-center">
        <TouchableOpacity
          className={clsx(
            "bg-brand-orange-400 justify-center items-center size-12 rounded-full",
            classNames?.iconContainer
          )}
        >
          {icon || <Ionicons name="link-outline" size={24} color="white" />}
        </TouchableOpacity>
        <Text className="text-[15px]/[24px] font-medium text-white max-w-[100px]">
          {content}
        </Text>
      </View>
      <View className="flex-row p-2 items-center justify-between mt-auto">
        <Text
          className={clsx(
            "font-medium text-white text-[15px]/[24px]",
            classNames?.subtext
          )}
        >
          {subtext}
        </Text>
        <TouchableOpacity>
          {arrowRightIcon || (
            <Feather name="arrow-right" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
