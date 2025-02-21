import { View } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { getPosts } from "../lib/utils";
import { Post } from "@/components/post/ui";

export const Posts = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await getPosts();
    },
  });

  if (!posts) return;

  return (
    <View className="gap-2 mb-48">
      {posts.map((post) => (
        <Post
          id={`${post.id}`}
          key={post.id}
          content={post.body}
          heading={post.title}
        />
      ))}
    </View>
  );
};
