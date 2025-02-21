import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";

import { checkIfAuthorized } from "../lib/token/utils";

const AppStateListener = () => {
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const router = useRouter();

  useEffect(() => {
    const handleAppStateChange = async (nextAppState: AppStateStatus) => {
      const authorized = await checkIfAuthorized();

      if (
        authorized &&
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        router.replace("/(auth)/confirm-pin");
      }
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, [router]);

  return null;
};

export default AppStateListener;
