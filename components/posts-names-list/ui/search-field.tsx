import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Control, Controller, useForm } from "react-hook-form";
import { TextInput, View } from "react-native";

type Props = {
  control: Control<
    {
      search: string;
    },
    any
  >;
};

export const SearchField = ({ control }: Props) => {
  return (
    <Controller
      control={control}
      name="search"
      render={({ field: { onBlur, onChange, value } }) => {
        return (
          <View className="flex-row items-center gap-1 border border-brand-gray-300 p-3 rounded-2xl">
            <EvilIcons
              className="mb-2"
              name="search"
              size={24}
              color="#606773"
            />
            <TextInput
              placeholder="Search Products..."
              value={value}
              className="text-[15px]/[16px] text-brand-gray-600"
              onChangeText={onChange}
              onBlur={onBlur}
            />
          </View>
        );
      }}
    />
  );
};
