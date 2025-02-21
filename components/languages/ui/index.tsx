import { BrandCheckbox } from "@/components/brand-checkbox";
import { languages } from "@/shared/data/languages";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Languages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleSelect = (lang: string) => {
    setSelectedLanguage(lang);
  };

  return (
    <View className="gap-4">
      {languages.map((lang) => (
        <TouchableOpacity
          key={lang}
          onPress={() => handleSelect(lang)}
          className="border items-center gap-[14px] border-brand-gray-300 p-5 rounded-2xl flex-row"
        >
          <Fontisto name="world-o" size={24} color="#FA8A34" />
          <View className="flex-row justify-between flex-1">
            <Text className="font-medium text-[15px]/[24px] w-full max-w-16 capitalize">
              {lang}
            </Text>
            <BrandCheckbox
              onChange={() => {}}
              checked={lang === selectedLanguage}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
