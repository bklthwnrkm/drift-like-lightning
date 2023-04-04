import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import ThemeSwitcher from "@/components/themeSwitcher";
import LocalizedDate from "@/components/localizedDate";
import { siteMetadata } from "@/data/siteMetadata";

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
  gitTimestamp: <LocalizedDate />,
  // search: {
  //   emptyResult: "aaaaa",
  // },
  toc: {
    title: "Table of Contents",
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
