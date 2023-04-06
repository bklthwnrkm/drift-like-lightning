import React, { ElementType, ComponentPropsWithoutRef } from "react";
import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";
import { Merge, TranslateDataStringType } from "@/types";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("Common.Search");
  const { localizedData } = useLocalizedDataFetcher(data);
  const Component = elementType as ElementType;

  return <Component {...rest}>{t("placeholder")}</Component>;
};

export default TranslatedString;
