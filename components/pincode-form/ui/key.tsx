import { Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

import { Keys } from "../lib/utils";

type Props = {
  value: Keys;
  handleChange: (key: Keys) => void;
};

export const Key = ({ value, handleChange }: Props) => {
  if (value === "clear")
    return (
      <TouchableOpacity
        className="w-1/3 flex justify-center items-center"
        onPress={() => {
          handleChange(value);
        }}
      >
        <Entypo name="erase" size={32} color="#06070A" />
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity
      className="w-1/3"
      onPress={() => {
        handleChange(value);
      }}
    >
      <Text className="text-center text-brand-black text-[28px]/[40px] font-bold">
        {value}
      </Text>
    </TouchableOpacity>
  );
};
