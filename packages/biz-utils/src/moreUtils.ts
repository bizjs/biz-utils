import { v4 as uuidV4 } from 'uuid';
import { ArgumentError } from './errors';
import { _isString } from './_internalUtils';

/**
 * 生成 UUID
 * @returns
 */
export function generateUuid(): string {
  return uuidV4();
}

/**
 * 生成一个唯一字符串，默认 12 位长度
 * @param len 可动态指定长度，8~32 位，默认 12 位
 * @returns
 */
export function generateUniqueId(len: number = 12): string {
  if (len < 8 || len > 32) {
    throw new ArgumentError('uniqueId len must >=8 and <=32', 'len');
  }
  const uniqId = generateUuid().replace(/\-/g, '');
  // 截取最后的 len 位
  return uniqId.substring(uniqId.length - len);
}

/**
 * 安全的转换 JSON String
 * @param jsonString
 * @param options
 * @returns
 */
export function safeJSONParse<T extends any = any>(
  jsonString: string,
  options?: {
    fallbackValue?: T;
  },
) {
  if (!_isString(jsonString)) {
    throw new ArgumentError('jsonString must be string.', 'jsonString');
  }
  try {
    return JSON.parse(jsonString) as T;
  } catch {
    return options?.fallbackValue !== undefined ? (options.fallbackValue as T) : null;
  }
}

/**
 * 数组去重
 * @param arr
 * @param keyFn
 * @returns
 */
export function distinct<T = any>(arr: T[], keyFn: (x: T) => any = x => x): T[] {
  const resultArr: T[] = [];
  const keySet = new Set();
  arr.forEach(item => {
    const key = keyFn(item);
    if (keySet.has(key)) {
      return;
    }
    keySet.add(key);
    resultArr.push(item);
  });
  return resultArr;
}

/**
 * 获取扩展名
 * @param filepath
 */
export function getExtName(filepath: string, options?: { toLower?: boolean }) {
  if (!_isString(filepath)) {
    return new ArgumentError('filepath must be string.', 'filepath');
  }
  // 判断是否无扩展名
  if (filepath.indexOf('.') < 0) {
    return '';
  }
  const ext = filepath.split('.').pop()!;
  return `.${options?.toLower === true ? ext.toLowerCase() : ext}`;
}
