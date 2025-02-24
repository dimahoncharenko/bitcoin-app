import { ScrollView, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";

import { PostsNamesList } from "@/components/posts-names-list";

export default function SearchScreen() {
  const { t } = useTranslation();

  return (
    // <ScrollView>
    <SafeAreaView className="p-4">
      <Text className="mb-4 text-[22px]/[32px] font-semibold">
        {t("search.title")}
      </Text>
      <PostsNamesList />
    </SafeAreaView>
  );

  /* </ScrollView> */
}
