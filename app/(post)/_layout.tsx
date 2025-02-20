import { Stack, Tabs } from "expo-router";
import { Platform } from "react-native";

export default function () {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
