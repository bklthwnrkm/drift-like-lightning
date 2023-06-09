import React from "react";
import { DocsThemeConfig, useMDXComponents } from "nextra-theme-docs";
import ThemeSwitcher from "@/components/themeSwitcher";
// import LocalizedDate from "@/components/localizedDate";
import TranslatedString from "@/components/translatedString";
import StringTranslator from "@/components/stringTranslator";
// import Navbar from "@/components/navbar";
import { siteMetadata } from "@/data/siteMetadata";
import {
  searchNotFoundData,
  tocsData,
  placeholderData,
} from "@/data/translation/translateData";
import useLocalizedDataFetcher from "@/hooks/useLocalizedDataFetcher";

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  useNextSeoProps() {
    return {
      defaultTitle: `${siteMetadata.title}`,
      titleTemplate: `%s | ${siteMetadata.title}`,
      description: `${siteMetadata.description}`,
    };
  },
  logo: <span>⛅{siteMetadata.title}⚡</span>,
  project: {
    link: `${siteMetadata.githubUrl}`,
  },
  docsRepositoryBase: `${siteMetadata.githubUrl}`,
  footer: {
    component: null,
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  gitTimestamp: null,
  // navbar: {
  //   component: <Navbar items={["a", "b", "c"]} />,
  // },
  search: {
    emptyResult: (
      <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
        <StringTranslator strData={searchNotFoundData} />
      </span>
    ),
    placeholder() {
      const { localizedData: placeholder } =
        useLocalizedDataFetcher(placeholderData);
      return placeholder;
    },
  },
  toc: {
    title: <TranslatedString<"span"> as="span" data={tocsData} />,
  },
  themeSwitch: {
    component: <ThemeSwitcher />,
  },
  primaryHue: {
    light: 210,
    dark: 200,
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ja", text: "日本語" },
  ],
};

export default config;
