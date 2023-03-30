import { useCallback } from "react";
import { useRouter } from "next/router";

const useLocalizedDataFetcher = (data: any) => {
  const { locale } = useRouter();
  const localizedData = data[locale];
  return { localizedData };
};

export default useLocalizedDataFetcher;
