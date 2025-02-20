export type Keys =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "0"
  | "clear";

export const isCodeFull = (code: string, key: Keys, limit = 4) => {
  return code.length >= limit && key !== "clear";
};

export const isClearTyped = (key: Keys) => {
  return key === "clear";
};
