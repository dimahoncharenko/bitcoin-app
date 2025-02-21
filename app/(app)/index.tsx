import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

import { HeroSection } from "@/components/hero-section";
import { Slider } from "@/components/sliders";
import { Card } from "@/components/card";
import { cards } from "@/shared/data/cards";
import { Posts } from "@/components/posts";
import { useTranslation } from "react-i18next";

export default function MainScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView>
      <SafeAreaView className="relative flex-1">
        <HeroSection />
        <View className="px-4">
          <View className="bg-white flex-row rounded-2xl h-[144px] my-6 p-6">
            <View className="flex-1 gap-1">
              <Text className="text-[15px]/[18px] font-medium">
                {t("home.testTask")}
              </Text>
              <Text className="text-[13px]/[15px] text-brand-gray-550">
                {t("home.testDescription")}
              </Text>
              <TouchableOpacity className="flex-row items-center gap-11 mb-1 mt-auto">
                <Text className="text-brand-green-400 font-medium text-[15px]/[24px]">
                  {t("home.toCall")}
                </Text>
                <Feather name="chevron-right" size={24} color="#009E81" />
              </TouchableOpacity>
            </View>
            <View className="flex-1 items-center max-w-[127px] rounded-xl bg-brand-green-800">
              <View className="size-[80px] border-b border-b-white border-x border-x-brand-green-800 rounded-[32px]"></View>
            </View>
          </View>

          <Text className="text-[15px]/[16px] text-brand-gray-700 m-2">
            {t("home.beforeStartSection")}
          </Text>
          <Slider>
            {cards.map((card, index) => (
              <Card
                key={index}
                content={card.content}
                subtext={card.subtext}
                classNames={{
                  container: card.containerClassname,
                  subtext: card.subtextClassname,
                }}
              />
            ))}
          </Slider>

          <Text className="text-[15px]/[16px] text-brand-gray-700 m-2 mt-8">
            {t("home.postsSection")}
          </Text>
          <Posts />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
