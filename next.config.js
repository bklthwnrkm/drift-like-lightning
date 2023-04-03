const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});
const withPWA = require("next-pwa");

module.exports = withNextra(
  {
    i18n: {
      locales: ["en", "ja"],
      defaultLocale: "en",
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  },
  withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },
  })
);
