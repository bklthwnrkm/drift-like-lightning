import { useRouter } from "next/router";
import { useFormatter } from "next-intl";
import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";
import {
  localizedDateData,
  localeData,
} from "@/data/translation/translateData";

type LocalizedDateProps = {
  designatedDate?: Date;
};

// 引数に指定の日付があればそれを、なければ現日時刻をローカライズして返す
// 記事ページ、現時刻、などタイプをハードコードして定義
const LocalizedDate = ({ designatedDate }: LocalizedDateProps) => {
  const { locale } = useRouter();
  const format = useFormatter();
  const dateTime = designatedDate !== undefined ? designatedDate : new Date();
  const { localizedData } = useLocalizedDataFetcher(localizedDateData);
  const formattedDate = format.dateTime(dateTime, localeData[locale].options);

  return (
    <dl className="flex gap-4 pb-2">
      <dt className="sr-only">{localizedData["published"]}</dt>
      <dd className="text-xs font-normal leading-5 text-gray-500 dark:text-gray-400 md:text-xs lg:text-sm">
        {/* <FontAwesomeIcon icon={faClock} /> */}
        {"  "}
        <time dateTime={formattedDate}>{formattedDate}</time>
      </dd>
      <dt className="sr-only">{localizedData["updated"]}</dt>
      <dd className="text-xs font-normal leading-5 text-gray-500 dark:text-gray-400 md:text-xs lg:text-sm">
        {/* <FontAwesomeIcon icon={faFilePen} /> */}
        {"  "}
        <time dateTime={formattedDate}>{formattedDate}</time>
      </dd>
    </dl>
  );
};

export default LocalizedDate;
