# Log

2023

0328

- Launched this website
- i18n internationalized this website adding some descriptions to
  - theme.config.tsx
  - middleware.ts
  - next.config.js
  - all existing mdx files
  - \_meta.json
- Introduced tailwind.css

0329

- Tweaked theme.config.tsx referring to the doc
  - https://nextra.site/docs/docs-theme/theme-configuration
- Added @svgr/webpack and related settings to next.config.js
- Added next-themes
- Created themeSwitch.tsx and hooks/useThemeOnMounted.ts, and then replaced the default theme switch with it
