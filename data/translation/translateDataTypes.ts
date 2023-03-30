import useLocales from "@/hooks/useLocales";

// const { locales } = useLocales();

export type TranslateDataString = {
  [key: string]: Array<{
    [key: string]: string;
  }>;
};
