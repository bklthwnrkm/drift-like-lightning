// const locales = ["en", "ja"] as const;
// type ExistingLocale = typeof locales;

export type TranslateDataObjectType = Record<
  string,
  Array<Record<string, string>>
>;
// export type TranslateDataObjectType = {
//   [key: string]: Array<{
//     [key: string]: string;
//   }>;
// };

export type TranslateDataStringType = Record<string, string>;

export type LocalizedDateType = Record<
  string,
  Array<
    Record<
      "options",
      import("../node_modules/use-intl/dist/core/DateTimeFormatOptions").default
    >
  >
>;
