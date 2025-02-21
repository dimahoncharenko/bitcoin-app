import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabelStyle: {
              lineHeight: 12,
            },
            tabBarActiveTintColor: "#FA8A34",
            tabBarInactiveTintColor: "#606773",
            title: t("home.tabbarHome"),
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                size={28}
                name="home-variant"
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="portfolio"
          options={{
            tabBarLabelStyle: {
              lineHeight: 12,
            },
            tabBarActiveTintColor: "#FA8A34",
            tabBarInactiveTintColor: "#606773",
            title: t("home.tabbarPortfolio"),
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="briefcase" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarLabelStyle: {
              lineHeight: 12,
            },
            tabBarActiveTintColor: "#FA8A34",
            tabBarInactiveTintColor: "#606773",
            title: t("home.tabbarSearch"),
            tabBarIcon: ({ color }) => (
              <Octicons name="search" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabelStyle: {
              lineHeight: 12,
            },
            tabBarActiveTintColor: "#FA8A34",
            tabBarInactiveTintColor: "#606773",
            title: t("home.tabbarProfile"),
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="language"
          options={{
            // Hide from tab bar
            tabBarItemStyle: {
              display: "none",
            },
            tabBarLabelStyle: {
              lineHeight: 12,
            },
            tabBarActiveTintColor: "#FA8A34",
            tabBarInactiveTintColor: "#606773",
            title: "",
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </>
  );
}
