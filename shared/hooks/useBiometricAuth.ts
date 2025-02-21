import * as LocalAuthentication from "expo-local-authentication";

import { Alert } from "@/components/alert";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useBiometricAuth = () => {
  const router = useRouter();
  const { t } = useTranslation();
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
        title: t("submitPin.passwordFallback"),
        errorMsg: t("submitPin.biometricsNotAvailable"),
        text: t("shared.ok"),
      });

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return Alert({
        title: t("submitPin.biometricsNotFound"),
        errorMsg: t("submitPin.passwordFallback"),
        text: t("shared.ok"),
      });
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: t("submitPin.biometricsHeader"),
      cancelLabel: t("submitPin.biometricsCancel"),
      disableDeviceFallback: true,
    });

    if (!biometricAuth.success) {
      return Alert({
        title: t("submitPin.biometricsErrorHead"),
        errorMsg: t("submitPin.biometricsErrorBody"),
        text: t("shared.ok"),
      });
    } else {
      router.push("/(app)");
    }
  };

  return { handleBiometricAuth, isBiometricSupported };
};
