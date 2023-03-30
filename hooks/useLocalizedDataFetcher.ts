import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { TranslateDataObjectType, TranslateDataStringType } from "@/types";

const useLocalizedDataFetcher = (
  data: TranslateDataObjectType | TranslateDataStringType
) => {
  const { locale, defaultLocale } = useRouter();
  // ↓これだとtoggleできてない
  // const [localizedData, setLocalizedData] = useState(data[defaultLocale]);
  // const switchDataByLocale = useCallback(() => {
  //   setLocalizedData(data[locale]);
  // }, [locale]);
  const localizedData = data[locale];

  return { localizedData /* , switchDataByLocale */ };
};

export default useLocalizedDataFetcher;
