import UrlParse from 'url-parse';

/**
 * 将浏览器的 querystring 转换为对象
 * @param search
 */
export function getQuery(search?: string): Record<string, string | undefined> {
  const searchStr = search === void 0 ? location.search : search;
  const urlIns = UrlParse(searchStr, true);
  return urlIns.query;
}
