import { useRouter } from "next/router";
import { TranslateDataObjectType, TranslateDataStringType } from "@/types";

type ReturnDataType<
  T extends TranslateDataObjectType | TranslateDataStringType
> = T extends TranslateDataStringType
  ? { readonly localizedData: string }
  : { readonly localizedData: Record<string, string>[] };

// 二つデータのタイプがあるのが綺麗でない気がするので、データの型用検討
// 第二引数でどのプロパティを取るか指定できるようにする？
// 第二引数の型は、第一引数のプロパティに含まれているものでなければならない。

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
