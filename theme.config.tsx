import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>⛅Drift like lightning⚡</span>,
  project: {
    link: "https://github.com/brkwtnh",
  },
  docsRepositoryBase: "https://github.com/brkwtnh",
  footer: {
    text: "Drift like lightning",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ja", text: "日本語" },
  ],
};

export default config;
