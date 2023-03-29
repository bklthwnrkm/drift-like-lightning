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
- Created static/images dir
- Added @splidejs/react-splide for image slider function
  - Created Slider.tsx
  - Took care of the error "isn't a valid image for ..."
    - https://stackoverflow.com/questions/71617582/i-am-getting-the-error-the-requested-resource-isnt-a-valid-image-for-public-l
