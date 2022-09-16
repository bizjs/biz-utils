export {
  // 日期相关
  formatDate,
  getTDate,
  // 表单验证
  isChineseLandlineNumber,
  isChinesePhoneNumber,
  isEmail,
  isIdCardNo,
  isIpV4,
  isIpV6,
  isURL,
  // 业务工具函数
  distinct,
  generateUniqueId,
  generateUuid,
  getExtName,
  safeJSONParse,
  // 数值运算
  numberAdd,
  numberDiv,
  numberMul,
  numberSub,
  // URL 相关
  parseQuery,
  stringifyQuery,
  updateUrl,
} from '@bizjs/biz-utils-common';

// 导出相关类型
export type { IsEmailOptions, IsURLOptions, UrlPartValues, UrlQuery } from '@bizjs/biz-utils-common';

// 浏览器相关业务工具函数
export { copyText, download, downloadBlob, getQuery, openUrl } from './browserUtils';
export type { DownloadOptions, DownloadBlobOptions, OpenUrlOptions } from './browserUtils';
