import { FlatList, Image, Text, View } from "react-native";
import clsx from "clsx";

import { SafeAreaView } from "react-native-safe-area-context";
import { Badge } from "@/components/Badge";
import { badges } from "@/shared/data/badges";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";

export default function WelcomeScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex items-center relative py-4 h-screen">
      <FlatList
        data={badges}
        numColumns={2}
        renderItem={({ item, index }) => (
          <>
            {index === 0 ? (
              <View
                className={clsx("min-w-[150px] max-w-[164px] h-[136px] m-2")}
              >
                <Image
                  source={require("../assets/icons/logo.png")}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </View>
            ) : (
              <View
                className={clsx(
                  "bg-white px-7 py-8 w-auto min-w-[150px] max-w-[164px] h-[136px] m-2 rounded-3xl",
                  item.order <= 3 && "translate-y-[68px]"
                )}
              >
                <View className="flex-row items-center justify-center">
                  {item.icons.map((icon, key) => (
                    <Badge
                      key={key}
                      source={icon}
                      className={clsx(
                        key === 0 && "-mr-4",
                        key === 1 && "size-12 z-10",
                        key === 2 && "-ml-4"
                      )}
                    />
                  ))}
                </View>
                <Text className="text-center">{t(item.label)}</Text>
              </View>
            )}
          </>
        )}
      />
      <View>
        <Link
          className="text-center text-[15px] font-semibold text-brand-orange-400"
          href="/(auth)"
        >
          {t("shared.signIn")}
        </Link>
        <View className="bg-brand-orange-400 w-full min-w-[343px] rounded-xl mb-[6px] mt-5">
          <Link
            className="py-3 text-[15px] text-center text-white font-semibold"
            href="/(auth)/sign-up"
          >
            {t("shared.signUp")}
          </Link>
        </View>
      </View>

      <Image
        className="absolute bottom-0 -z-10"
        source={require("../assets/images/welcome-bg.png")}
      />
    </SafeAreaView>
  );
}
