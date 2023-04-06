export type TranslateDataObjectType = Record<
  string,
  Array<Record<string, string>>
>;

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

export type Merge<T> = {
  [K in keyof T]: T[K];
};
