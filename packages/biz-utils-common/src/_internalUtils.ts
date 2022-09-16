function noop() {}

export function _ensureFunction(fn: unknown) {
  return typeof fn === 'function' ? fn : noop;
}

/**
 * 是否是有效字符串
 * @param str
 * @returns
 */
export function _isString(str: unknown) {
  return typeof str === 'string';
}
