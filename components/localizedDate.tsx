import { useRouter } from "next/router";
import { useFormatter } from "next-intl";
import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";
import {
  localizedDateData,
  localeData,
} from "@/data/translation/translateData";
import { siteMetadata } from "@/data/siteMetadata";

type LocalizedDateProps = {
  designatedDate?: Date | string;
  // description?: string;
};

const isRegisteredLocale = (
  locale: unknown
): locale is typeof siteMetadata.locales[number] => {
  return siteMetadata.locales.some((e) => locale === e);
};

const LocalizedDate = ({ designatedDate }: LocalizedDateProps) => {
  const { locale } = useRouter();
  const format = useFormatter();

  let dateTime = designatedDate !== undefined ? designatedDate : new Date();
  if (typeof dateTime === "string") dateTime = new Date(dateTime);
  const { localizedData } = useLocalizedDataFetcher(localizedDateData);
  const formattedDate = format.dateTime(
    dateTime,
    isRegisteredLocale(locale)
      ? localeData.get(locale)[0].options
      : localeData.get("en")[0].options
  );

  return (
    <dl className="flex gap-4 pb-2">
      {/* {description && <dt className="sr-only">{description}</dt>} */}
      <dt className="sr-only">{localizedData["published"]}</dt>
      <dd className="text-xs font-normal leading-5 text-gray-500 dark:text-gray-400 md:text-xs lg:text-sm">
        <time dateTime={formattedDate}>{formattedDate}</time>
      </dd>
    </dl>
  );
};

export default LocalizedDate;
