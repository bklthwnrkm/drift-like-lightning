import { useRouter } from "next/router";
import { TranslateDataObjectType, TranslateDataStringType } from "@/types";

type ReturnDataType<
  T extends TranslateDataObjectType | TranslateDataStringType
> = T extends TranslateDataStringType
  ? { readonly localizedData: string }
  : { readonly localizedData: Record<string, string>[] };

const useLocalizedDataFetcher = <
  T extends TranslateDataObjectType | TranslateDataStringType
>(
  data: T
): ReturnDataType<T> => {
  const { locale } = useRouter();
  const localizedData = data[locale];

  return { localizedData } as ReturnDataType<T>;
};

export default useLocalizedDataFetcher;
