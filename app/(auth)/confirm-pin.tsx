import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { PincodeForm } from "@/components/pincode-form";
import { useBiometricAuth } from "@/shared/hooks/useBiometricAuth";
import { pinService } from "@/shared/lib/pin/utils";
import { Alert } from "@/components/alert";
import { tokenService } from "@/shared/lib/token/utils";

const pinLength = 5;

export default function ConfirmPinScreen() {
  const [pin, setPin] = useState("");
  const allowedToLeave = useRef(false);

  const router = useRouter();
  const navigation = useNavigation();
  const { handleBiometricAuth } = useBiometricAuth();

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      // Only prevent navigation if not explicitly allowed
      if (!allowedToLeave.current && pin.length < pinLength) {
        e.preventDefault();
      }
    });

    return () => unsubscribe();
  }, [navigation, pin]);

  const handlePinSubmit = async (code: string) => {
    const candidate = await pinService.getPin();
    const validated = code === candidate;

    if (validated) {
      allowedToLeave.current = true;
      router.back();
    } else {
      setPin("");
      Alert({ title: "Invalid PIN", errorMsg: "Please try again.", text: "" });
    }
  };

  const handleLogout = async () => {
    try {
      allowedToLeave.current = true;
      await tokenService.deleteToken();
      router.replace("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 py-3 bg-white">
      <View className="flex-row justify-between relative px-3">
        <TouchableOpacity
          className="rounded-full bg-brand-green-100 size-12 border border-brand-green-200 flex justify-center items-center"
          onPress={handleLogout}
        >
          <SimpleLineIcons name="logout" size={24} color="black" />
        </TouchableOpacity>
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
      <PincodeForm
        code={pin}
        setCode={setPin}
        handleSubmit={handlePinSubmit}
        pinLength={pinLength}
      />
    </SafeAreaView>
  );
}
