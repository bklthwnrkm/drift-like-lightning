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
      title: "TOEIC Listening & Reading",
      acquisitionDate: "",
    },
  ],
  ja: [
    {
      title: "実用英語技能検定1級",
      acquisitionDate: "",
    },
    {
      title: "全米ｽﾎﾟｰﾂ医学協会ﾊﾟﾌｫｰﾏﾝｽ向上ｽﾍﾟｼｬﾘｽﾄ",
      acquisitionDate: "",
    },
    {
      title: "TOEIC Listening & Reading",
      acquisitionDate: "",
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
