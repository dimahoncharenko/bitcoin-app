import { useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";

import { getPosts } from "@/components/posts/lib/utils";
import { SearchField } from "./search-field";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { Post } from "@/shared/lib/posts/utils";
import { Filter } from "@/components/filter";

export const PostsNamesList = () => {
  const { control, watch } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      return await getPosts();
    },
  });

  if (!posts) return;

  const search = watch("search");

  const criteria = useCallback(
    (post: Post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    },
    [search]
  );

  return (
    <>
      <SearchField control={control} />

      <View className="gap-2">
        <Filter data={posts} criteria={criteria}>
          {(filtered) =>
            filtered.map((post) => (
              <View key={post.id} className="bg-white px-4 py-6 rounded-2xl">
                <Text className="text-[15px]/[24px] text-brand-black font-medium">
                  ID: {post.id}
                </Text>
                <Text className="text-brand-gray-550 text-[13px]/[16px]">
                  Name: {post.title}
                </Text>
              </View>
            ))
          }
        </Filter>
      </View>
    </>
  );
};
