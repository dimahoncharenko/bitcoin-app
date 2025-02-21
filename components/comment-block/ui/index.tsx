import { Comment } from "@/shared/lib/comments/utils";
import { Text, View } from "react-native";

type Props = {
  comment: Comment;
};

export const CommentBlock = ({ comment }: Props) => {
  return (
    <View className="bg-white p-3 rounded-2xl">
      <Text className="capitalize text-lg/[24px] font-medium">
        {comment.name}
      </Text>
      <Text className="font-medium text-[15px]/[24px] mb-3">
        {comment.email}
      </Text>
      <Text className="text-sm/[19px]">{comment.body}</Text>
    </View>
  );
};
