import Feather from "@expo/vector-icons/Feather";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ArrowBack } from "@/components/arrow-back";
import { ErrorMessage } from "@/components/error-message";
import {
  checkUserPassword,
  checkUsername,
  login,
  loginValidationSchema,
} from "@/shared/lib/login/utils";
import { tokenService } from "@/shared/lib/token/utils";
import { checkIsTherePin } from "@/shared/lib/pin/utils";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const saveSession = (token: string, email: string) => {
    tokenService.saveToken(token);
    AsyncStorage.setItem("user-email", email);
  };

  const redirectToAppOrPinconfirm = async () => {
    const isTherePin = await checkIsTherePin();
    router.push(isTherePin ? "/(app)" : "/confirm-pin");
  };

  const handleError = (err: unknown, values: FormValues) => {
    const isUsernameCorrect = checkUsername(values.email);

    if (!isUsernameCorrect) {
      setError("email", { message: "There is no such user!" });
    } else if (isUsernameCorrect && !checkUserPassword(values.password)) {
      setError("password", { message: "Incorrect password!" });
    }

    console.error(err);
  };

  const submit = async (values: FormValues) => {
    try {
      const res = await login(values);
      saveSession(res.accessToken, values.email);
      await redirectToAppOrPinconfirm();
    } catch (err) {
      handleError(err, values);
    }
  };

  return (
    <SafeAreaView className="relative flex-1">
      <View className="h-1/6 flex justify-center">
        <ArrowBack />
      </View>
      <Image
        className="absolute top-0 -z-10"
        source={require("../../assets/images/welcome-bg.png")}
      />
      <View className="py-4 h-5/6 mt-auto bg-white rounded-t-[27px]">
        <View className="flex-row px-4 items-center  pb-[18px] gap-3">
          <View className="size-12 flex justify-center items-center rounded-full bg-brand-green-100 border border-brand-green-200">
            <Feather name="user" size={18} color="#00A385" />
          </View>
          <View>
            <Text className="text-brand-black text-[15px] font-semibold">
              {t("signIn.header")}
            </Text>
            <Text className="text-[15px] text-brand-gray-500">
              {t("signIn.account")}
            </Text>
          </View>
        </View>
        <View className="border-t pt-[18px] border-t-brand-gray-200">
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="py-6 px-4 relative">
                <Text className="mb-2 ml-4 text-[15px] text-brand-gray-500">
                  {t("signIn.fields.email")}
                </Text>
                <TextInput
                  className="border rounded-2xl h-14 px-4 text-brand-black text-[15px]/[1rem] border-brand-gray-300"
                  placeholder={t("signIn.fields.emailPlaceholder")}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  autoComplete="email"
                  autoCapitalize="none"
                />
                {errors.email && (
                  <ErrorMessage className="left-8 -bottom-0">
                    {errors.email.message}
                  </ErrorMessage>
                )}
              </View>
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
              minLength: 6,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="px-4 relative">
                <View className="flex-row justify-between mx-4">
                  <Text className="mb-2 text-[15px] text-brand-gray-500">
                    {t("signIn.fields.password")}
                  </Text>
                  {errors.password && (
                    <TouchableOpacity>
                      <Text className="text-brand-orange-400 text-[15px]">
                        {t("signIn.forgot")}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
                <TextInput
                  className="border rounded-2xl px-4 h-14 font-black text-brand-gray-500 text-2xl/[1rem] border-brand-gray-300"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                  autoComplete="password"
                  autoCorrect={false}
                  placeholderClassName="text-yellow-300"
                />
                {errors.password && (
                  <ErrorMessage className="left-8 -bottom-6">
                    {errors.password.message}
                  </ErrorMessage>
                )}
              </View>
            )}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit(submit)}
          className="bg-brand-orange-400 mx-4 py-1 rounded-2xl mt-8"
        >
          <Text className="text-center text-white text-[15px] font-semibold py-3">
            {t("shared.submit")}
          </Text>
        </TouchableOpacity>
        <Link
          href="/(auth)/sign-up"
          className="text-brand-orange-400 mt-4 text-center text-[15px] font-medium"
        >
          {t("signIn.noAccount")}
        </Link>
      </View>
    </SafeAreaView>
  );
}
