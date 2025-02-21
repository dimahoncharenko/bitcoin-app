import Checkbox from "expo-checkbox";

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
};

export const BrandCheckbox = ({ onChange, checked }: Props) => {
  return (
    <Checkbox
      className="bg-brand-gray-200 !text-xs !rounded-full !border-0 !size-8"
      color={checked ? "#FA8A34" : undefined}
      value={checked}
      onValueChange={onChange}
    />
  );
};
