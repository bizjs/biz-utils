# `biz-utils-common`

适用 Node、Browser、小程序的业务工具库

## Usage

```bash
# Install
npm i @bizjs/biz-utils-common -S
```

```ts
import { parseQuery } from '@bizjs/biz-utils';

// 获取浏览器 URL 的 querystring 并转换为对象
const query = parseQuery('?a=str');
```
