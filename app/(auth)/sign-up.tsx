import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { yupResolver } from "@hookform/resolvers/yup";

import { ErrorMessage } from "@/components/error-message";
import { signUpValidationSchema } from "@/shared/lib/sign-up/utils";
import { ArrowBack } from "@/components/arrow-back";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

export default function SignUpScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const submit = () => {
    router.push("/create-pin");
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
            <Feather name="user-plus" size={18} color="#00A385" />
          </View>
          <View>
            <Text className="text-brand-black text-[15px] font-semibold">
              {t("signUp.header")}
            </Text>
            <Text className="text-[15px] text-brand-gray-500">
              {t("signUp.account")}
            </Text>
          </View>
        </View>
        <View className="border-t pt-[18px] border-t-brand-gray-200">
          <Controller
            name="username"
            control={control}
            rules={{
              required: true,
              minLength: 2,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="px-4 relative">
                <Text className="mb-2 ml-4 text-[15px] text-brand-gray-500">
                  {t("signUp.fields.name")}
                </Text>
                <TextInput
                  className="border rounded-2xl h-14 px-4 text-brand-black text-[15px]/[1rem] border-brand-gray-300"
                  placeholder={t("signUp.fields.namePlaceholder")}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.username && (
                  <ErrorMessage className="left-8 -bottom-6">
                    {errors.username.message}
                  </ErrorMessage>
                )}
              </View>
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="py-6 px-4 relative">
                <Text className="mb-2 ml-4 text-[15px] text-brand-gray-500">
                  {t("signUp.fields.email")}
                </Text>
                <TextInput
                  className="border rounded-2xl h-14 px-4 text-brand-black text-[15px]/[1rem] border-brand-gray-300"
                  placeholder="johndoe@gmail.com"
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
                <Text className="mb-2 ml-4 text-[15px] text-brand-gray-500">
                  {t("signUp.fields.password")}
                </Text>
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
          className="mt-auto bg-brand-orange-400 mx-4 rounded-2xl"
        >
          <Text className="text-center text-white text-[15px] font-semibold py-3">
            {t("shared.submit")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
