import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import ThemeSwitcher from "@/components/themeSwitcher";
import Counters from "@/components/counters";

const config: DocsThemeConfig = {
  logo: <span>⛅Drift like lightning⚡</span>,
  project: {
    link: "https://github.com/bklthwnrkm",
  },
  docsRepositoryBase: "https://github.com/bklthwnrkm",
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
    component: <ThemeSwitcher />,
  },
  primaryHue: 210,
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ja", text: "日本語" },
  ],
};

export default config;
