import { ArrowBack } from "@/components/arrow-back";
import { BrandButton } from "@/components/brand-button";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PostScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <ArrowBack className="absolute left-14 top-6" />
      <View className="mt-auto bg-white py-4">
        <BrandButton onPress={() => router.back()}>Back</BrandButton>
      </View>
    </SafeAreaView>
  );
}
