import { updateUrl } from '@bizjs/biz-utils-common';
import { OpenUrlOptions } from './typings/common';

function noop() {}

export function _ensureFunction(fn: unknown) {
  return typeof fn === 'function' ? fn : noop;
}

export function _openUrl(url: string, options?: OpenUrlOptions & { download?: string }) {
  const finalUrl = updateUrl(url, { query: options?.query || {} });

  // 模拟 a 标签点击跳转
  const aEl = document.createElement('a');
  aEl.href = finalUrl;
  // 是否要新窗口打开
  if (options?.newWindow) {
    aEl.target = '_blank';
  }
  // 是否是下载文件
  if (options?.download) {
    aEl.download = options.download;
  }
  aEl.rel = 'noopener';
  aEl.style.display = 'none';
  document.body.appendChild(aEl);
  aEl.click();
  document.body.removeChild(aEl);
}

/**
 * 是否是有效字符串
 * @param str
 * @returns
 */
export function _isString(str: unknown) {
  return typeof str === 'string';
}
