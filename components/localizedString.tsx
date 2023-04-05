import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";
import { Merge, TranslateDataStringType } from "@/types";

type LocalizedStringProps<C extends React.ElementType> = Merge<
  React.ComponentPropsWithoutRef<C> & {
    Component: C;
    data: TranslateDataStringType;
  }
>;

const LocalizedString = <C extends React.ElementType>({
  Component,
  data,
  ...rest
}: LocalizedStringProps<C>) => {
  const { localizedData } =
    useLocalizedDataFetcher<TranslateDataStringType>(data);

  return <Component {...rest}>{localizedData}</Component>;
};

export default LocalizedString;
