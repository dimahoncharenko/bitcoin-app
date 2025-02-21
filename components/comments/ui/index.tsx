import { View } from "react-native";

import { CommentBlock } from "@/components/comment-block";
import { useQuery } from "@tanstack/react-query";
import { commentsService } from "@/shared/lib/comments/utils";
import { commentsArePresent } from "../lib/utils";

type Props = {
  postId: string;
};

export const Comments = ({ postId }: Props) => {
  const { data: comments } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      return await commentsService.getCommentsByPostId(postId);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <View className="mx-4 gap-3 mb-6">
      {commentsArePresent(comments) &&
        comments.map((comment) => {
          return <CommentBlock key={comment.id} comment={comment} />;
        })}
    </View>
  );
};
