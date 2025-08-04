---
title: Browser Utils
order: 5
---

# 浏览器相关业务工具函数

## copyText 复制文本

在浏览器中复制文本到剪贴板

### 典型场景

1. 点击按钮，复制特定文本到剪贴板

### 样例

<code src="./browserUtils/CopyText_1.tsx"></code>

## download 常规下载

通过浏览器进行文件下载

### 典型场景

1. 根据一个 URL 直接调用浏览器文件下载，使用中小型文件下载

### 样例

<code src="./browserUtils/Download_1.tsx"></code>

## downloadBlob 文件流下载

使用 XMLHttpRequest 下载文件 blob

### 典型场景

1. 当需要下载进度条时使用

### 样例

<code src="./browserUtils/DownloadBlob_1.tsx" />

## getQuery 解析 URL Query

解析 URL Query

### 典型场景

1. 直接获取 URL Qurey

### 样例

<code src="./browserUtils/GetQuery_1.tsx" />

## openUrl 打开地址

打开地址

### 典型场景

1. 使用 JS 页面跳转
2. 新窗口打开页面

### 样例

<code src="./browserUtils/OpenUrl_1.tsx" />
