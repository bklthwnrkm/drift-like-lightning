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
- Came up with a solution that enables mdx files to have next/router, thereby handling locales
- Added router obj to certifications.lang.mdx to switch alt values depending on locales
- Added next-pwa
- Created useLocalizedDataFetcher.ts to move the logic of fetching localized data from views to hooks
- Created types dir and index.ts in it
  - Added TranslateDataStringType and TranslateDataObjectType to it

0331

- Added next-intl
- Added NextIntlProvider to \_app.tsx
- Created LocalizedDate.tsx

0403

- Changed font-family for the whole
- Did initial settings for pwa
  - Added withPWA to next.config.js
  - Created manifest images and docs and uploaded them in public
    - https://zenn.dev/tns_00/articles/next-pwa-install
    - https://www.simicart.com/manifest-generator.html/
  - Created \_document.tsx temporarily and added some related descriptions to it.
- Added next-compose-plugins to make next.config.js look better
- Tweaked theme.config.tsx on head, and useNextSeoProps.
- Created data/siteMetadata.ts
