import { _isString } from './_internalUtils';
import { ArgumentError } from './errors';

/**
 * 数组去重
 * @param arr
 * @param keyFn
 * @returns
 */
export function distinct<T>(arr: T[], keyFn: (x: T) => unknown = x => x): T[] {
  if (!Array.isArray(arr)) {
    throw new ArgumentError('arr must be an array.', 'arr');
  }
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
 * 将数组按照指定的数量进行分组
 * @param arr
 * @param maxPerGroup
 * @returns
 */
export function splitIntoGroups<T>(arr: T[], maxPerGroup: number) {
  const groups: T[][] = [];
  for (let i = 0; i < arr.length; i += maxPerGroup) {
    groups.push(arr.slice(i, i + maxPerGroup));
  }
  return groups;
}

/**
 * 将数组转换为对象
 * @param arr
 * @param keyFn
 * @param valueFn
 * @returns
 */
export function arr2obj<T, R = T>(arr: T[], keyFn: (item: T) => string, valueFn?: (item: T) => R): Record<string, R> {
  const _valueFn = valueFn ?? ((x: T) => x);
  return arr.reduce((acc, cur) => {
    acc[keyFn(cur)] = _valueFn(cur) as R;
    return acc;
  }, {} as Record<string, R>);
}
