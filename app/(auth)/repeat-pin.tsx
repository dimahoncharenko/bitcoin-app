import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

import { ArrowBack } from "@/components/arrow-back";
import { PincodeForm } from "@/components/pincode-form";
import { useBiometricAuth } from "@/shared/hooks/useBiometricAuth";

const pinLength = 5;

export default function RepeatPinScreen() {
  const router = useRouter();
  const { handleBiometricAuth } = useBiometricAuth();

  const handlePinSubmit = () => {
    router.push("/");
  };

  return (
    <SafeAreaView className="flex-1 py-3 bg-white">
      <View className="flex-row justify-between relative px-3">
        <View className="size-12">
          <ArrowBack className="left-10 top-3" />
        </View>
        <View className="rounded-full bg-brand-green-100 size-12 border border-brand-green-200 flex justify-center items-center">
          <Ionicons name="phone-portrait-outline" size={24} color="#00A385" />
        </View>
        <TouchableOpacity
          onPress={() => handleBiometricAuth()}
          className="rounded-full bg-brand-green-100 size-12 border border-brand-green-200 flex justify-center items-center"
        >
          <Ionicons name="finger-print" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text className="text-center my-2 text-[15px] font-medium">
        Repeat a Pin code
      </Text>
      <Text className="text-center my-6 text-[15px] text-brand-gray-500">
        enter 5 digit code:
      </Text>
      <PincodeForm handleSubmit={handlePinSubmit} pinLength={pinLength} />
    </SafeAreaView>
  );
}
