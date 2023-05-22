import {
  TranslateDataType,
  TranslateDataStringType,
  TranslateDataObjectType,
  LocalizedDateType,
} from "@/types";

// export const translateData = new Map([
//   [
//     "ja",
//     new Map([
//       ["certificationData", ""],
//       ["data2", "データ2"],
//     ]),
//   ],
//   [
//     "en",
//     new Map([
//       ["data1", "data1"],
//       ["data2", "data2"],
//     ]),
//   ],
// ]);

// export const translateDataKeys = [
//   ...Array.from(translateData.get("en").keys()),
// ] as const;

export const certificationData: TranslateDataObjectType = {
  en: [
    {
      title: "sky1",
      acquisitionDate: "",
    },
    {
      title: "sky2",
      acquisitionDate: "",
    },
    {
      title: "sky3",
      acquisitionDate: "",
    },
  ],
  ja: [
    {
      title: "空1",
      acquisitionDate: "2021-11-30",
    },
    {
      title: "空2",
      acquisitionDate: "2020-09-08",
    },
    {
      title: "空3",
      acquisitionDate: "2020-10-20",
    },
  ],
};

export const certificationImageData: TranslateDataObjectType = {
  en: [
    {
      alt: "sky1",
      src: "/static/images/sky.jpg",
    },
    {
      alt: "sky2",
      src: "/static/images/sky.jpg",
    },
    {
      alt: "sky3",
      src: "/static/images/sky.jpg",
    },
  ],
  ja: [
    {
      alt: "空1",
      src: "/static/images/sky.jpg",
    },
    {
      alt: "空2",
      src: "/static/images/sky.jpg",
    },
    {
      alt: "空3",
      src: "/static/images/sky.jpg",
    },
  ],
};

export const themeToggleButtonData: TranslateDataStringType = {
  en: "Toggle between dark and light mode",
  ja: "ﾀﾞｰｸ/ﾗｲﾄﾓｰﾄﾞの切り替え",
};

export const sliderLabelData: TranslateDataStringType = {
  en: "Carousel slider",
  ja: "ｶﾙｰｾﾙｽﾗｲﾀﾞｰ",
};

export const searchNotFoundData: TranslateDataStringType = {
  en: "Not Found",
  ja: "検索結果が見つかりません",
};

export const placeholderData: TranslateDataStringType = {
  en: "Search pages...",
  ja: "検索...",
};

export const localizedDateData: TranslateDataObjectType = {
  en: [
    {
      published: "Published date",
      updated: "Updated date",
    },
  ],
  ja: [
    {
      published: "発行日",
      updated: "更新日",
    },
  ],
};

export const localeData: LocalizedDateType = new Map([
  [
    "ja",
    {
      options: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      },
    },
  ],
  [
    "en",
    {
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    },
  ],
]);

export const tocsData: TranslateDataStringType = {
  en: "Table of Contents",
  ja: "目次",
};
