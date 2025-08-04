import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@bizjs/biz-utils',
  description: 'The front-end biz utils.',
  head: [['link', { rel: 'icon', href: 'assets/logo.webp' }]],
  outDir: '../docs-dist',
  base: '/biz-utils/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'assets/logo.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/modules/browser-utils' },
      { text: 'APIs', link: '/apis/globals' },
    ],

    sidebar: {
      modules: [
        {
          text: 'Examples',
          items: [
            { text: 'Browser Utils', link: '/modules/browser-utils' },
            { text: 'Date Utils', link: '/modules/dateUtils' },
            { text: 'Form Rules', link: '/modules/formRules' },
            { text: 'More Utils', link: '/modules/moreUtils' },
            { text: 'Number Utils', link: '/modules/numeralUtils' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/bizjs/biz-utils' }],
  },
});
