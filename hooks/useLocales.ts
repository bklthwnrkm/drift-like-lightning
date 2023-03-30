import { useRouter } from "next/router";

const useLocales = () => {
  const { locales } = useRouter();
  const localesData: typeof locales = locales;
  return { locales };
};

export default useLocales;
