import i18n from "@/app/i18n";
import { BrandCheckbox } from "@/components/brand-checkbox";
import { languages } from "@/shared/data/languages";
import Fontisto from "@expo/vector-icons/Fontisto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Languages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

  const handleSelect = (lang: string) => {
    setSelectedLanguage(lang);
    changeLanguage(lang);
  };

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View className="gap-4">
      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          onPress={() => handleSelect(lang.code)}
          className="border items-center gap-[14px] border-brand-gray-300 p-5 rounded-2xl flex-row"
        >
          <Fontisto name="world-o" size={24} color="#FA8A34" />
          <View className="flex-row justify-between flex-1">
            <Text className="font-medium text-[15px]/[24px] w-full max-w-16 capitalize">
              {lang.label}
            </Text>
            <BrandCheckbox
              onChange={() => {}}
              checked={lang.code === selectedLanguage}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
