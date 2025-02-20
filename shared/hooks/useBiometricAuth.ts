import * as LocalAuthentication from "expo-local-authentication";

import { Alert } from "@/components/alert";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export const useBiometricAuth = () => {
  const router = useRouter();

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        setIsBiometricSupported(compatible);
      } catch (err) {
        console.error("Error checking biometric support: ", err);
        setIsBiometricSupported(false);
      }
    })();
  }, []);

  const handleBiometricAuth = async () => {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if (!isBiometricAvailable)
      return Alert({
        title: "Please enter your password",
        errorMsg: "Biometrics auth not supported",
        text: "OK",
      });

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return Alert({
        title: "Biometric record not found",
        errorMsg: "Please login with your password",
        text: "OK",
      });
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login to Bitcoin App with biometrics",
      cancelLabel: "Cancel",
      disableDeviceFallback: true,
    });

    if (!biometricAuth.success) {
      return Alert({
        title: "Biometric login failed",
        errorMsg: "Biometrics authentication failed or user's denial",
        text: "OK",
      });
    } else {
      router.push("/(app)");
    }
  };

  return { handleBiometricAuth, isBiometricSupported };
};
