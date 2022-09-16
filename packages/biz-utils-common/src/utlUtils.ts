import URLParse, { qs } from 'url-parse';
import type { URLPart } from 'url-parse';
import type { UrlPartValues, UrlQuery } from './typings/lib.type';

/**
 * 更新 URL
 * @param url 要更新的 URL
 * @param urlPartValues 要更新的 URL 参数
 * @returns
 */
export function updateUrl(url: string, urlPartValues: UrlPartValues) {
  // 将 url 转换为 Url 对象，并解析 querystring
  const urlObj = new URLParse(url, true);
  // 更新 URL 参数
  Object.keys(urlPartValues).forEach((urlPart: unknown) => {
    urlObj.set(urlPart as URLPart, urlPartValues[urlPart as URLPart]);
  });
  // 序列化为最终 url
  return urlObj.toString();
}

/**
 * 解析 querystring 为对象
 * @param query
 * @returns
 */
export function parseQuery(query: string) {
  return qs.parse(query);
}

/**
 * 将 query 对象转换为 querystring（不带?）
 * @param query
 * @returns
 */
export function stringifyQuery(query: UrlQuery) {
  return qs.stringify(query);
}
