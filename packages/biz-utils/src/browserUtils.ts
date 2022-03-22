import UrlParse from 'url-parse';
import { saveAs } from 'file-saver';
import { _buildUrl, _ensureFunction, _openUrl } from './_internalUtils';
import type { OpenUrlOptions, UrlQuery } from './typings/common';

/**
 * 将浏览器的 querystring 转换为对象
 * @param search
 */
export function getQuery(search?: string): Record<string, string | undefined> {
  const searchStr = search === void 0 ? location.search : search;
  const urlIns = UrlParse(searchStr, true);
  return urlIns.query;
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
export function download(url: string, options: DownloadOptions): void {
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
  const finalUrl = _buildUrl(url, { query: options?.query });

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
