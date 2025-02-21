import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PostsNamesList } from "@/components/posts-names-list";

export default function SearchScreen() {
  return (
    <ScrollView>
      <SafeAreaView className="p-4">
        <Text className="mb-4 text-[22px]/[32px] font-semibold">Search</Text>
        <PostsNamesList />
      </SafeAreaView>
    </ScrollView>
  );
}
