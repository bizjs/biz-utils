// import commonjs from '@rollup/plugin-commonjs';
// father-build 依赖的 rollup 版本较低，只能先用老的 commonjs 插件
import commonjs from 'rollup-plugin-commonjs';

export default {
  esm: 'rollup',
  cjs: 'rollup',
  extraRollupPlugins: [commonjs()],
};
