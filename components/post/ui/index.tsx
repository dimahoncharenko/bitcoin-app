import { Link } from "expo-router";
import { Text, View } from "react-native";

type Props = {
  id: string;
  heading: string;
  content: string;
};

export const Post = ({ content, heading, id }: Props) => {
  return (
    <View className="bg-white rounded-2xl gap-2 p-3">
      <Text className="capitalize font-medium text-[#171718] text-lg/[22px]">
        {heading}
      </Text>
      <Text
        ellipsizeMode="head"
        numberOfLines={3}
        className="overflow-hidden text-brand-gray-900 text-base/[20px]"
      >
        {content}
      </Text>
      <Link
        className="text-brand-orange-400"
        href={{ pathname: "/(post)/[id]", params: { id } }}
      >
        Show more
      </Link>
    </View>
  );
};
