import AntDesign from "@expo/vector-icons/AntDesign";
import clsx from "clsx";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

type Props = {
  className?: string;
};

export const ArrowBack = ({ className }: Props) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.back()}>
      <AntDesign
        name="left"
        size={24}
        className={clsx("scale-x-[0.75] -ml-12", className)}
        color="#06070A"
      />
    </TouchableOpacity>
  );
};
