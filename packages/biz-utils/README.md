# `biz-utils`

适用与 `PC Web` 的业务工具库，支持在 `React、Vue、Angular` 中使用

## Usage

```bash
# Install
npm i @bizjs/biz-utils -S
```

```ts
import { getQuery } from '@bizjs/biz-utils';

// 获取浏览器 URL 的 querystring 并转换为对象
const query = getQuery();
```

## 依赖项（Deps）

```bash
# save-dev 依赖，会在构建时直接打包到 dist 中
"clipboard": "^2.0.10",
"uuid": "^8.3.2",
"validator": "^13.7.0"

# save 依赖，会在 dist 中直接依赖
"dayjs": "^1.11.0",
"decimal.js": "^10.3.1",
"file-saver": "^2.0.5",
"lodash": "^4.17.21",
```
