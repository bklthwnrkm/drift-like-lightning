// import { createElement } from "react";
// import { useTranslations } from "next-intl";
import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";
import { commonConfigData } from "@/data/translation/translateData";
import {
  Merge,
  TranslateDataObjectType,
  TranslateDataStringType,
  // CommonConfigKey
} from "@/types";

type LocalizedStringProps<C extends React.ElementType> = Merge<
  React.ComponentPropsWithoutRef<C> & {
    Component: C;
    data: TranslateDataObjectType | TranslateDataStringType;
  }
>;

const LocalizedString = <C extends React.ElementType>({
  Component,
  data,
  ...rest
}: LocalizedStringProps<C>) => {
  // const t = useTranslations("Common");
  const { localizedData } = useLocalizedDataFetcher(data);

  return typeof localizedData === "string" ? (
    <Component {...rest}>{localizedData}</Component>
  ) : (
    <Component {...rest}>仮置き</Component>
  );
};

export default LocalizedString;
