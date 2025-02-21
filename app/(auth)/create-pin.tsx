import { useState } from "react";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ArrowBack } from "@/components/arrow-back";
import { PincodeForm } from "@/components/pincode-form";
import { pinService } from "@/shared/lib/pin/utils";

const pinLength = 5;

export default function CreatePinScreen() {
  const { t } = useTranslation();
  const [pin, setPin] = useState("");
  const router = useRouter();

  const handleSubmit = async (code: string) => {
    const validated = code.length === pinLength;

    if (validated) {
      await pinService.savePin(code);
      setPin("");
      router.push("/(auth)/repeat-pin");
    }
  };

  return (
    <SafeAreaView className="flex-1 py-3 bg-white">
      <View className="flex-row justify-between relative">
        <ArrowBack className="absolute left-14 top-3" />
        <View className="rounded-full bg-brand-green-100 size-12 border border-brand-green-200 flex justify-center items-center">
          <Ionicons name="phone-portrait-outline" size={24} color="#00A385" />
        </View>
        <View />
      </View>
      <Text className="text-center my-2 text-[15px] font-medium">
        {t("createPin.header")}
      </Text>
      <Text className="text-center my-6 text-[15px] text-brand-gray-500">
        {t("createPin.description")}
      </Text>
      <PincodeForm
        code={pin}
        setCode={setPin}
        handleSubmit={handleSubmit}
        pinLength={pinLength}
      />
    </SafeAreaView>
  );
}
