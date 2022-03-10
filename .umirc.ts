import { defineConfig } from 'dumi';

// more config: https://d.umijs.org/config
export default defineConfig({
  title: '@hstar/biz-utils',
  mode: 'doc', // doc | site
  favicon: 'http://mms2.baidu.com/it/u=904939350,1506106807&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500',
  logo: 'http://mms2.baidu.com/it/u=904939350,1506106807&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500',
  outputPath: 'docs-dist',
  history: { type: 'hash' },
  hash: true,
});
