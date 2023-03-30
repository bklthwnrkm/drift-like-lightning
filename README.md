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
    - Just made public dir and put static in it
    - https://stackoverflow.com/questions/71617582/i-am-getting-the-error-the-requested-resource-isnt-a-valid-image-for-public-l
- Modified contents in some mdx files

0330

- Created data/translation dir and translateData.ts in it
- Generalized slider.tsx
  - Let it receive any props of Splide
  - With utility type Pick, some of image props can be passed onto it
