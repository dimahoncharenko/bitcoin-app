import { ArrowBack } from "@/components/arrow-back";
import { BrandButton } from "@/components/brand-button";
import { Comments } from "@/components/comments";
import { postsService } from "@/shared/lib/posts/utils";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";

import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PostScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data: post } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      return await postsService.getPostById(id.toString());
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (!post) return;

  return (
    <ScrollView>
      <SafeAreaView className="flex-1">
        <View className="h-full max-h-[420px] -mt-10 bg-white relative p-4 rounded-b-[20px]">
          <ArrowBack className="absolute left-14 top-14" />
          <Text className="capitalize font-bold mb-16 text-[28px]/[32px] mt-28 text-center">
            Post Name
          </Text>

          <ImageBackground
            className="w-full aspect-video"
            resizeMode="cover"
            source={require("../../assets/images/post-banner.png")}
          />
        </View>

        <Text className="text-[15px]/[16px] text-brand-gray-700 my-2 mx-4 mt-12">
          About
        </Text>
        <View className="rounded-2xl bg-white p-6 mx-4">
          <Text className="text-[15px]/[32px]">{post.body}</Text>
        </View>

        <Text className="text-[15px]/[16px] text-brand-gray-700 my-2 mx-4">
          Comments
        </Text>
        <Comments postId={id.toString()} />
        <View className=" bg-white py-5">
          <BrandButton className="mb-5" onPress={() => router.back()}>
            Back
          </BrandButton>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
