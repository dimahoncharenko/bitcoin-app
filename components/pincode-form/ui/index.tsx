import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { BrandButton } from "@/components/brand-button";
import { PinInput } from "@/components/pin-input";
import { Keys, isClearTyped, isCodeFull } from "../lib/utils";
import { Key } from "./key";

type Props = {
  pinLength?: number;
  handleSubmit: (code: string) => void;
};

export const PincodeForm = ({ pinLength = 4, handleSubmit }: Props) => {
  const [code, setCode] = useState("");

  const handleChangePin = (key: Keys) => {
    if (isCodeFull(code, key, pinLength)) return;
    if (isClearTyped(key)) {
      return setCode((prev) => prev.slice(0, -1));
    }

    setCode((prevCode) => (prevCode + key).slice(0, 5));
  };

  useEffect(() => {
    if (code.length >= pinLength) handleSubmit(code);
  }, [code.length]);

  return (
    <>
      <PinInput length={pinLength} value={code} />
      <FlatList
        numColumns={3}
        contentContainerClassName="mt-auto py-8 flex my-3 border-y border-y-brand-gray-300 items-center gap-[30px]"
        data={
          [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            null,
            "0",
            "clear",
          ] as Keys[]
        }
        renderItem={({ item }) =>
          item ? (
            <Key value={item} handleChange={handleChangePin} />
          ) : (
            <View className="w-1/3" />
          )
        }
      />
      <BrandButton
        onPress={() => {
          if (code.length < pinLength) return;
          handleSubmit(code);
        }}
      >
        Continue
      </BrandButton>
    </>
  );
};
