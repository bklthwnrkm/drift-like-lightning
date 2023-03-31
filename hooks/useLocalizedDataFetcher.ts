import { useRouter } from "next/router";
import { TranslateDataObjectType, TranslateDataStringType } from "@/types";

const useLocalizedDataFetcher = (
  data: TranslateDataObjectType | TranslateDataStringType
) => {
  const { locale } = useRouter();
  const localizedData = data[locale];

  return { localizedData };
};

export default useLocalizedDataFetcher;
