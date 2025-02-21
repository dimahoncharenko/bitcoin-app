import { SafeAreaView, Text, View } from "react-native";

import { ArrowBack } from "@/components/arrow-back";
import { Languages } from "@/components/languages";

export default function LanguageScreen() {
  return (
    <SafeAreaView className="bg-white flex-1 pt-10">
      <ArrowBack className="absolute left-14 top-10" />
      <View className="py-24 px-4">
        <Text className="text-brand-black mb-4 text-[22px]/[32px] font-semibold">
          Language
        </Text>
        <Languages />
      </View>
    </SafeAreaView>
  );
}
