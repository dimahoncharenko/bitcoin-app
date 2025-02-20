import clsx from "clsx";
import React from "react";
import { View, TouchableOpacity } from "react-native";

type Props = {
  value: string;
  length?: number;
};

export const PinInput = ({ value, length = 4 }: Props) => {
  return (
    <TouchableOpacity className="justify-center items-center">
      <View className="flex-row gap-4">
        {Array.from({ length }).map((_, index) => (
          <View
            key={index}
            className={clsx("size-6 rounded-full bg-brand-gray-400")}
            style={[value.length > index && { backgroundColor: "#FA8A34" }]}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};
