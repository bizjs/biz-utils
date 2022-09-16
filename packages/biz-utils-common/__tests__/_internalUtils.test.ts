import { _ensureFunction, _isString } from '../src/_internalUtils';

describe('_internalUtils test', () => {
  describe('_ensureFunction test', () => {
    it('_ensureFunction should return a function', () => {
      let fn = (_ensureFunction as any)();
      expect(fn).toBeInstanceOf(Function);

      fn = _ensureFunction(1);
      expect(fn).toBeInstanceOf(Function);

      fn = _ensureFunction({});
      expect(fn).toBeInstanceOf(Function);

      fn = _ensureFunction([]);
      expect(fn).toBeInstanceOf(Function);

      fn = _ensureFunction(null);
      expect(fn).toBeInstanceOf(Function);

      fn = _ensureFunction(undefined);
      expect(fn).toBeInstanceOf(Function);

      // 如果本身就是函数，原样返回
      const fn2 = function () {};
      fn = _ensureFunction(fn2);
      expect(fn).toBe(fn2);
    });
  });

  describe('_isString test', () => {
    it('_isString ok', () => {
      expect(_isString('test')).toBe(true);
      expect(_isString('')).toBe(true);
      expect(_isString(1)).toBe(false);
      expect(_isString(true)).toBe(false);
      expect(_isString(/\d{1}/)).toBe(false);
      expect(_isString({})).toBe(false);
    });
  });
});
