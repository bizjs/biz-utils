import FileSaver from 'file-saver';
import { _ensureFunction, _isString, _openUrl } from './_internalUtils';

const { saveAs } = FileSaver;
import type { OpenUrlOptions, UrlQuery } from './typings/common';
import { ArgumentError } from './errors';
import { parseQuery, updateUrl } from '@bizjs/biz-utils-common';

/**
 * 将浏览器的 querystring 转换为对象
 * @param search
 */
export function getQuery(search?: string): Record<string, string | undefined> {
  const searchStr = search === void 0 ? location.search : search;
  return parseQuery(searchStr);
}

export type { OpenUrlOptions };
/**
 * 打开链接
 * @param url
 * @param options
 * @returns
 */
export function openUrl(url: string, options?: OpenUrlOptions) {
  return _openUrl(url, options || {});
}

export type DownloadOptions = OpenUrlOptions & {
  filename?: string;
};
/**
 * 文件下载（常规模式，浏览器打开下载链接）
 * @param url
 * @param options
 * @returns
 */
export function download(url: string, options?: DownloadOptions): void {
  const filename = String(options?.filename || 'download');
  const opt = Object.assign({ newWindow: true }, options || {}, { download: filename });
  return _openUrl(url, opt);
}

export type DownloadBlobOptions = {
  filename?: string;
  query?: UrlQuery;
  onProgress?: (total: number, loaded: number, e?: ProgressEvent) => void;
  xhrOptions?: {
    headers?: Record<string, string>;
    withCredenticals?: boolean;
  };
};
/**
 * 下载文件（二进制模式，支持进度条）
 * @param url
 * @param options
 * @returns
 */
export function downloadBlob(url: string, options?: DownloadBlobOptions): Promise<boolean> {
  const opt = Object.assign({ filename: 'download' }, options || {});
  const finalUrl = updateUrl(url, { query: options?.query });

  return new Promise((resolve, reject) => {
    // 构造 xhr
    const downloadXhr = new XMLHttpRequest();
    downloadXhr.open('GET', finalUrl, true);
    downloadXhr.withCredentials = Boolean(opt?.xhrOptions?.withCredenticals);
    downloadXhr.responseType = 'blob';
    // 附加自定义 headers
    const headers: Record<string, string> = opt?.xhrOptions?.headers || {};
    Object.keys(headers).forEach(key => {
      downloadXhr.setRequestHeader(key, headers[key]);
    });

    // 回调进度变化
    const progressFn = _ensureFunction(options?.onProgress);
    downloadXhr.onprogress = ev => {
      progressFn(ev.total, ev.loaded, ev);
    };

    //异常处理
    downloadXhr.onerror = () => {
      const err = new Error('Download blob failed.');
      reject(err);
    };

    // 成功处理
    downloadXhr.onload = () => {
      if (downloadXhr.status < 200 || downloadXhr.status >= 300) {
        return reject(new Error(`Download blob failed. status = ${downloadXhr.status}`));
      }
      saveAs(downloadXhr.response, String(opt?.filename));
      resolve(true);
    };

    downloadXhr.send();
  });
}

/**
 * 复制文本到剪贴板
 *
 * 优先使用异步 Clipboard API（不依赖 DOM 焦点，在 focus-trap 弹窗如
 * Radix/Ant Modal 内也能工作）；非安全上下文（http 非 localhost）没有
 * navigator.clipboard，降级为 execCommand——降级时 textarea 挂在当前焦点
 * 元素旁而非 document.body，避免被弹窗焦点陷阱拦截导致选区为空。
 * @param content 要复制的文本
 */
export function copyText(content: string): Promise<void> {
  if (!_isString(content)) {
    throw new ArgumentError('content must be string.', 'content');
  }

  if (window.isSecureContext && navigator.clipboard) {
    return navigator.clipboard.writeText(content);
  }

  const anchor =
    document.activeElement instanceof HTMLElement ? document.activeElement.parentElement ?? document.body : document.body;
  const textarea = document.createElement('textarea');
  textarea.value = content;
  textarea.style.cssText = 'position:fixed;opacity:0';
  anchor.appendChild(textarea);
  textarea.select();
  try {
    if (document.execCommand('copy') === false) {
      return Promise.reject(new Error('copy command failed'));
    }
    return Promise.resolve();
  } catch (ex) {
    return Promise.reject(ex);
  } finally {
    textarea.remove();
  }
}
