import { defineConfig } from 'umi';
export default defineConfig({
  npmClient: 'pnpm',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  scripts: [
    'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js',
    'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js',
  ],
});
