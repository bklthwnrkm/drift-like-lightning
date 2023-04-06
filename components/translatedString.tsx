import React, { ElementType, ComponentPropsWithoutRef } from "react";
import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";
import { Merge, TranslateDataStringType } from "@/types";

type TranslatedStringProps<
  C extends keyof Pick<JSX.IntrinsicElements, "div" | "p" | "span">
> = Merge<
  ComponentPropsWithoutRef<C> & {
    as?: C;
    data: TranslateDataStringType;
  }
>;

const TranslatedString = <
  C extends keyof Pick<JSX.IntrinsicElements, "div" | "p" | "span"> = "div"
>({
  as: elementType,
  data,
  ...rest
}: TranslatedStringProps<C>) => {
  const { localizedData } = useLocalizedDataFetcher(data);
  const Component = elementType as ElementType;

  return <Component {...rest}>{localizedData}</Component>;
};

export default TranslatedString;

// これ、単に翻訳した文字列を返すだけのシンプルなコンポーネントにする？
