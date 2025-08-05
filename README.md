# biz-utils

The front-end biz utils.

若想参与贡献，可在：https://github.com/bizjs/biz-utils/projects/1 认领 Task

## 开始使用

```bash
# Install
npm i @bizjs/biz-utils -S
```

```ts
import { getQuery, numberAdd } from '@bizjs/biz-utils';

// 获取浏览器 URL 的 querystring 并转换为对象
const query = getQuery();

const num = numberAdd(0.1, 0.2); // '0.3'
```

## 如何研发

> 推荐使用 `pnpm` 作为包管理工具

```bash
# 安装依赖
pnpm i

# Run dev
pnpm dev

# 单元测试
pnpm test

# 发布（run 不能丢）
pnpm run pub

# 发布文档（推送到 gh-pages）
pnpm docs:release
```
