import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import ThemeSwitch from "@/components/themeSwitch";
// import Counters from "@/components/counters";

const config: DocsThemeConfig = {
  logo: <span>⛅Drift like lightning⚡</span>,
  project: {
    link: "https://github.com/brkwtnh",
  },
  docsRepositoryBase: "https://github.com/brkwtnh",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Drift Like Lightning
        </a>
        .
      </span>
    ),
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  toc: {
    title: "Table of Contents",
  },
  themeSwitch: {
    component: <ThemeSwitch />,
  },
  primaryHue: 220,
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ja", text: "日本語" },
  ],
};

export default config;
