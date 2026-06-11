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

## 开发指南

> 使用 `pnpm` 作为包管理工具，构建使用 `tsdown`，版本与 changelog 管理使用 `changesets`

### 1. 开发

```bash
# 安装依赖
pnpm i

# 文档站开发（vitepress）
pnpm dev

# 包构建（所有包，单包可在 packages/* 下执行 pnpm dev 进入 watch 模式）
pnpm build

# 单元测试 / 类型检查
pnpm test
pnpm tsc
```

### 2. 记录 changelog

代码改完后，为本次变更添加一个 changeset（和代码一起提交）：

```bash
pnpm cs
```

按提示操作：

1. 选择受影响的包（空格勾选）
2. 选择版本级别：`major`（破坏性变更）/ `minor`（新功能）/ `patch`（修复）
3. 写一句面向使用者的变更描述（会出现在 CHANGELOG 和 GitHub Release 中）

完成后会在 `.changeset/` 下生成一个 md 文件，**连同代码一起提交、合并到 `main`**。

### 3. 发版（手动触发，两步）

发版通过 GitHub Actions 的 **Release** workflow 完成（Actions 页面手动 Run workflow）：

1. **第一次触发**：存在未消费的 changeset 时，bot 会创建/更新一个 `chore(release): version packages` 的 PR（自动改版本号、生成 CHANGELOG）
2. **审查并合并**该 PR
3. **第二次触发**：此时没有待处理的 changeset，workflow 会执行 `pnpm ci:publish` 发布到 npm，并自动构建发布文档站（gh-pages）

> 本地手动发版（救急用）：`pnpm ci:publish`，文档发布：`pnpm docs:release`
