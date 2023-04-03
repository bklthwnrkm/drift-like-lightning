import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import ThemeSwitcher from "@/components/themeSwitcher";
import LocalizedDate from "@/components/localizedDate";
import CustomHead from "@/components/head";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Drift like lightning" />
      <meta
        property="og:description"
        content="This is a website run by Hikari"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Drift like lightning",
    };
  },
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
  gitTimestamp: <LocalizedDate />,
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
