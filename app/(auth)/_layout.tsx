import { Stack } from "expo-router";

export default function () {
  return (
    <Stack>
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="create-pin"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="confirm-pin"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="repeat-pin"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
