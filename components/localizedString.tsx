import { useFormatter, useTranslations } from "next-intl";
import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";
import { searchConfigData } from "@/data/translation/translateData";

type LocalizedStringProps = {
  targetString: string;
};

const localizedString = ({ targetString }: LocalizedStringProps) => {
  const t = useTranslations("Common");
  const { localizedData } = useLocalizedDataFetcher(searchConfigData);

  return <div></div>;
};

export default localizedString;
