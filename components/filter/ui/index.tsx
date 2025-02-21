import { ReactNode, useMemo } from "react";

type Props<B, T extends Array<B>> = {
  data: T;
  criteria: (element: T[number]) => void;
  children: (filtered: T) => ReactNode;
};

export const Filter = <B, T extends Array<B>>({
  criteria,
  data,
  children,
}: Props<B, T>) => {
  const filteredData = useMemo(
    () => data.filter(criteria) as T,
    [data, criteria]
  );

  return <>{children(filteredData)}</>;
};
