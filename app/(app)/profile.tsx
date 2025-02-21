import { Text, TouchableOpacity, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { ArrowBack } from "@/components/arrow-back";
import { tokenService } from "@/shared/lib/token/utils";

export default function ProfileScreen() {
  const router = useRouter();

  const logout = async () => {
    await tokenService.deleteToken();
    router.push("/(auth)");
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <ArrowBack className="absolute left-14 top-4" />
      <View className="p-5">
        <Text className="text-[22px]/[32px] font-semibold mt-10 mb-4">
          Settings
        </Text>
        <View className="border items-center gap-[14px] border-brand-gray-300 p-5 rounded-2xl flex-row">
          <View className="size-8 bg-brand-gray-200 rounded-full" />
          <Text className="font-medium text-[15px]/[24px]">Test User</Text>
        </View>
        <View className="gap-8">
          <View className="mt-8">
            <Text className="m-2">Basic</Text>
            <View className="border items-center gap-2 border-brand-gray-300 p-5 rounded-2xl flex-row">
              <Fontisto name="world-o" size={24} color="#FA8A34" />
              <TouchableOpacity
                className="flex-row flex-1 justify-between"
                onPress={() => router.push("/language")}
              >
                <Text className="font-medium text-[15px]/[24px]">Language</Text>
                <Feather name="chevron-right" size={24} color="#C1C4CB" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text className="m-2">Other</Text>
            <View className="border items-center gap-2 border-brand-gray-300 p-5 rounded-2xl flex-row">
              <Ionicons name="log-out-outline" size={24} color="#FA8A34" />
              <TouchableOpacity
                className="flex-row flex-1 justify-between"
                onPress={logout}
              >
                <Text className="font-medium text-[15px]/[24px]">Log Out</Text>
                <Feather name="chevron-right" size={24} color="#C1C4CB" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
