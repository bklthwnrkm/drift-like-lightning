import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";
import { TranslateDataStringType } from "@/types";

type StringTranslatorProps = {
  strData: TranslateDataStringType;
};

const StringTranslator = ({ strData }: StringTranslatorProps) => {
  const { localizedData: retStr } = useLocalizedDataFetcher(strData);

  return <>{retStr}</>;
};

export default StringTranslator;
