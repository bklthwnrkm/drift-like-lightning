import { siteMetadata } from "@/data/siteMetadata";

export type TranslateDataObjectType = Record<
  string,
  Array<Record<string, string>>
>;

export type TranslateDataStringType = Record<string, string>;

export type LocalizedDateType = Map<
  typeof siteMetadata.locales[number],
  Array<
    Record<
      "options",
      import("../node_modules/use-intl/dist/core/DateTimeFormatOptions").default
    >
  >
>;
// export type LocalizedDateType = Record<
//   string,
//   Array<
//     Record<
//       "options",
//       import("../node_modules/use-intl/dist/core/DateTimeFormatOptions").default
//     >
//   >
// >;

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, L extends number> = Exclude<
  Enumerate<L>,
  Enumerate<F>
>;

type ZeroToNine = IntRange<0, 9>;
type OneToNine = IntRange<1, 9>;
type OneToTwo = IntRange<1, 2>;
type ZeroToOne = IntRange<0, 1>;
type ZeroToTwo = IntRange<0, 2>;

type DD = `${0}${OneToNine}` | `${OneToTwo}${ZeroToNine}` | `3${ZeroToOne}`;
type MM = `0${ZeroToNine}` | `1${ZeroToTwo}`;
type YYYY = `19${ZeroToNine}${ZeroToNine}` | `20${ZeroToNine}${ZeroToNine}`;

export type MyFrontMatterType = {
  date?: `${YYYY}-${MM}-${DD}` | `${YYYY}${MM}${DD}`;
  title?: string;
};

export type Merge<T> = {
  [K in keyof T]: T[K];
};
