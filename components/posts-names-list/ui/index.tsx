import { useQuery } from "@tanstack/react-query";
import { Text, View, VirtualizedList } from "react-native";

import { getPosts } from "@/components/posts/lib/utils";
import { SearchField } from "./search-field";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { Post } from "@/shared/lib/posts/utils";
import { Filter } from "@/components/filter";
import { useTranslation } from "react-i18next";

export const PostsNamesList = () => {
  const { t } = useTranslation();

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

      <View className="gap-2 mt-4">
        <Filter data={posts} criteria={criteria}>
          {
            (filtered) => (
              <VirtualizedList
                data={filtered}
                initialNumToRender={8}
                className="mb-56"
                renderItem={({ item: post }: { item: Post }) => (
                  <View className="bg-white px-4 py-6 rounded-2xl odd:my-2">
                    <Text className="text-[15px]/[24px] text-brand-black font-medium">
                      {t("search.id")} {post.id}
                    </Text>
                    <Text className="text-brand-gray-550 text-[13px]/[16px]">
                      {t("search.name")} {post.title}
                    </Text>
                  </View>
                )}
                getItem={(data, index) => data[index]}
                getItemCount={() => filtered.length}
                keyExtractor={(item) => item.id.toString()}
              />
            )
            // filtered.map((post) => (
            // <View key={post.id} className="bg-white px-4 py-6 rounded-2xl">
            //   <Text className="text-[15px]/[24px] text-brand-black font-medium">
            //     {t("search.id")} {post.id}
            //   </Text>
            //   <Text className="text-brand-gray-550 text-[13px]/[16px]">
            //     {t("search.name")} {post.title}
            //   </Text>
            // </View>
            // ))
          }
        </Filter>
      </View>
    </>
  );
};
