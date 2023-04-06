import { useRouter } from "next/router";
import { useFormatter } from "next-intl";
import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";
import {
  // localizedDateData,
  localeData,
} from "@/data/translation/translateData";

type LocalizedDateProps = {
  designatedDate?: Date | string;
  description?: string;
};

const LocalizedDate = ({ designatedDate, description }: LocalizedDateProps) => {
  const { locale } = useRouter();
  const format = useFormatter();

  let dateTime = designatedDate !== undefined ? designatedDate : new Date();
  if (typeof dateTime === "string") dateTime = new Date(dateTime);
  // const { localizedData } = useLocalizedDataFetcher(localizedDateData);
  const formattedDate = format.dateTime(
    dateTime,
    localeData[locale][0].options
  );

  return (
    <dl className="flex gap-4 pb-2">
      {description && <dt className="sr-only">{description}</dt>}
      <dd className="text-xs font-normal leading-5 text-gray-500 dark:text-gray-400 md:text-xs lg:text-sm">
        <time dateTime={formattedDate}>{formattedDate}</time>
      </dd>
    </dl>
  );
};

export default LocalizedDate;
