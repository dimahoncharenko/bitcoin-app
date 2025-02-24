import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useCurrentUser } from "@/shared/hooks/useCurrentUser";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { user } = useCurrentUser();
  const { t } = useTranslation();

  return (
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0, 0.5, 1.8]}
      colors={[
        "rgba(250, 138, 52, .8)",
        "rgba(250, 138, 52, 1)",
        "rgba(250, 138, 52, .8)",
      ]}
      className="h-full justify-center items-center max-h-[296px] -mt-14 py-12 border-2 border-[rgba(250,138,52,.6)] rounded-b-3xl overflow-hidden"
    >
      <Text className="text-[13px]/[16px] text-white">
        {t("home.username")}
      </Text>
      <Text className="text-[28px]/[32px] mt-2 font-bold text-white">
        {user?.username || t("home.usernameFallback")}
      </Text>
    </LinearGradient>
  );
};
