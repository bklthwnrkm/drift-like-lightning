import { useRouter } from "next/router";
import { TranslateDataObjectType, TranslateDataStringType } from "@/types";

const useLocalizedDataFetcher = <
  T extends TranslateDataObjectType | TranslateDataStringType
>(
  data: T
) => {
  // 👆の記述要る？？、、
  const { locale } = useRouter();
  const localizedData = data[locale];

  return { localizedData } as const;
};

export default useLocalizedDataFetcher;
