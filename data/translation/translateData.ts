import {
  TranslateDataStringType,
  TranslateDataObjectType,
  LocalizedDateType,
} from "@/types";

export const certificationData: TranslateDataObjectType = {
  en: [
    {
      title: "The EIKEN Test in Practical English Proficiency Grade 1",
      acquisitionDate: "",
    },
    {
      title: "NASM-PES",
      acquisitionDate: "",
    },
    {
      title: "TOEIC Listening & Reading 925",
      acquisitionDate: "",
    },
  ],
  ja: [
    {
      title: "実用英語技能検定1級",
      acquisitionDate: "2021-11-30",
    },
    {
      title: "全米ｽﾎﾟｰﾂ医学協会ﾊﾟﾌｫｰﾏﾝｽ向上ｽﾍﾟｼｬﾘｽﾄ",
      acquisitionDate: "2020-09-08",
    },
    {
      title: "TOEIC Listening & Reading 925点",
      acquisitionDate: "2020-10-20",
    },
  ],
};

export const certificationImageData: TranslateDataObjectType = {
  en: [
    {
      alt: "The EIKEN Test in Practical English Proficiency Grade 1",
      src: "/static/images/eiken-grade-1.jpg",
    },
    {
      alt: "NASM-PES",
      src: "/static/images/nasm-pes.jpg",
    },
    {
      alt: "TOEIC Listening and Reading score",
      src: "/static/images/toeic-l-and-r-score.jpg",
    },
  ],
  ja: [
    {
      alt: "実用英語技能検定1級",
      src: "/static/images/eiken-grade-1.jpg",
    },
    {
      alt: "全米ｽﾎﾟｰﾂ医学協会ﾊﾟﾌｫｰﾏﾝｽ向上ｽﾍﾟｼｬﾘｽﾄ",
      src: "/static/images/nasm-pes.jpg",
    },
    {
      alt: "TOEIC ﾘｽﾆﾝｸﾞ ﾘｰﾃﾞｨﾝｸﾞｽｺｱ",
      src: "/static/images/toeic-l-and-r-score.jpg",
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

// export const localeData: LocalizedDateType = new Map([
//   [
//     "ja",
//     [
//       {
//         options: {
//           year: "numeric",
//           month: "numeric",
//           day: "numeric",
//         },
//       },
//     ],
//   ],
//   [
//     "en",
//     [
//       {
//         options: {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         },
//       },
//     ],
//   ],
// ]);
export const localeData: LocalizedDateType = {
  ja: [
    {
      options: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      },
    },
  ],
  en: [
    {
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    },
  ],
};

export const tocsData: TranslateDataStringType = {
  en: "Table of Contents",
  ja: "目次",
};
