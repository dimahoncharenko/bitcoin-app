import Feather from "@expo/vector-icons/Feather";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { ArrowBack } from "@/components/arrow-back";
import { ErrorMessage } from "@/components/error-message";
import {
  checkUserPassword,
  checkUsername,
  login,
  loginValidationSchema,
} from "@/shared/lib/login/utils";
import { tokenService } from "@/shared/lib/keychain/utils";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const router = useRouter();

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

  const submit = async (values: FormValues) => {
    try {
      const res = await login(values);
      tokenService.saveToken(res.accessToken);
      router.push("/create-pin");
    } catch (err) {
      const isUsernameCorrect = checkUsername(values.email);

      if (!isUsernameCorrect) {
        setError("email", { message: "There is no such user!" });
      } else if (isUsernameCorrect && !checkUserPassword(values.password)) {
        setError("password", { message: "Incorrect password!" });
      }
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
              Login
            </Text>
            <Text className="text-[15px] text-brand-gray-500">
              Personal Account
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
                  E-mail
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
                <View className="flex-row justify-between mx-4">
                  <Text className="mb-2 text-[15px] text-brand-gray-500">
                    Password
                  </Text>
                  {errors.password && (
                    <TouchableOpacity>
                      <Text className="text-brand-orange-400 text-[15px]">
                        Forgot?
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
            Continue
          </Text>
        </TouchableOpacity>
        <Link
          href="/(auth)/sign-up"
          className="text-brand-orange-400 mt-4 text-center text-[15px] font-medium"
        >
          Create Account
        </Link>
      </View>
    </SafeAreaView>
  );
}
