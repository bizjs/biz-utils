import { defineConfig } from 'vitepress';
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@bizjs/biz-utils',
  description: 'The front-end biz utils.',
  head: [['link', { rel: 'icon', href: 'assets/logo.webp' }]],
  outDir: '../docs-dist',
  base: '/biz-utils/',
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'assets/logo.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/modules/browser-utils' },
      { text: 'APIs', link: '/apis/modules' },
    ],

    sidebar: {
      modules: [
        {
          text: 'Examples',
          items: [
            { text: 'Browser Utils', link: '/modules/browser-utils' },
            { text: 'Date Utils', link: '/modules/date-utils' },
            { text: 'Form Rules', link: '/modules/form-rules' },
            { text: 'More Utils', link: '/modules/more-utils' },
            { text: 'Number Utils', link: '/modules/numeral-utils' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/bizjs/biz-utils' }],
  },
});
