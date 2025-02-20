import { Post as TPost } from "@/shared/lib/posts/utils";
import { useEffect, useState } from "react";
import { getPosts, handleFetchPostsError } from "../lib/utils";
import { Post } from "@/components/post/ui";
import { View } from "react-native";

export const Posts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (err) {
        handleFetchPostsError(err);
      }
    })();
  }, []);

  if (!posts.length) return;

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
