---
title: Date Utils
order: 10
---

# 日期类相关业务工具函数

## formatDate 格式化日期

将日期格式化为特定本地字符串

### 典型场景

1. 服务端下发的日期是 Date、时间戳时，需要正确显示到 UI 上

### 样例

<demo react="./dateUtils/FormatDate_1.tsx" />

## getTDate 计算 T + N 日期

通过传入时间 T，加上偏移天数 N（天）计算出 T + N 的时间

### 典型场景

1. 报表场景下，默认的日期一般是 T + N 格式，如 T + 1

### 样例

<demo react="./dateUtils/GetTDate_1.tsx" />
