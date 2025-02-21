import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";

import { ArrowBack } from "@/components/arrow-back";
import { PincodeForm } from "@/components/pincode-form";
import { pinService } from "@/shared/lib/pin/utils";
import { Alert } from "@/components/alert";
import { useTranslation } from "react-i18next";

const pinLength = 5;

export default function RepeatPinScreen() {
  const [pin, setPin] = useState("");
  const { t } = useTranslation();
  const router = useRouter();

  const displayPinError = () => {
    setPin("");
    Alert({
      title: t("repeatPin.errorHead"),
      errorMsg: t("repeatPin.errorBody"),
      text: t("shared.ok"),
    });
  };

  const handlePinSubmit = async (code: string) => {
    const candidate = await pinService.getPin();
    const validated = code === candidate;

    if (validated) {
      router.push("/(app)");
    } else {
      displayPinError();
    }
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
        <View className="size-12" />
      </View>
      <Text className="text-center my-2 text-[15px] font-medium">
        {t("repeatPin.header")}
      </Text>
      <Text className="text-center my-6 text-[15px] text-brand-gray-500">
        {t("repeatPin.description")}
      </Text>
      <PincodeForm
        code={pin}
        setCode={setPin}
        handleSubmit={handlePinSubmit}
        pinLength={pinLength}
      />
    </SafeAreaView>
  );
}
