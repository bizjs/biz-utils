import Decimal from 'decimal.js';
Decimal.set({ precision: 50, toExpPos: 1e9, toExpNeg: -1e9 });

// BigNumber.config({ DECIMAL_PLACES: 50, EXPONENTIAL_AT: 1e9 });

/**
 * 精确的数值加法
 * @param num1
 * @param nums
 * @returns
 */
export function numberAdd(num1: number | string, ...nums: (number | string)[]) {
  let d = new Decimal(num1);
  nums.forEach(num => {
    d = d.add(num);
  });
  return d.toString();
}

/**
 * 精确的数值减法
 * @param num1
 * @param nums
 * @returns
 */
export function numberSub(num1: number | string, ...nums: (number | string)[]) {
  let d = new Decimal(num1);
  nums.forEach(num => {
    d = d.sub(num);
  });
  return d.toString();
}

/**
 * 精确的数值乘法
 * @param num1
 * @param nums
 * @returns
 */
export function numberMul(num1: number | string, ...nums: (number | string)[]) {
  let d = new Decimal(num1);
  nums.forEach(num => {
    d = d.mul(num);
  });
  return d.toString();
}

/**
 * 精确的数值除法
 * @param num1
 * @param nums
 * @returns
 */
export function numberDiv(num1: number | string, ...nums: (number | string)[]) {
  let d = new Decimal(num1);
  nums.forEach(num => {
    d = d.div(num);
  });
  return d.toString();
}
