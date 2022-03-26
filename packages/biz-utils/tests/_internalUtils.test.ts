import { _buildUrl, _ensureFunction, _openUrl, _isString } from '../src/_internalUtils';

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

  describe('_buildUrl test', () => {
    const source = 'https://www.hstar.vip/';
    it('_buildUrl with no query', () => {
      let url = _buildUrl(source);
      expect(url).toBe(source);

      url = _buildUrl(source, { query: {} });
      expect(url).toBe(source);

      url = _buildUrl(source, { query: null });
      expect(url).toBe(source);
    });

    it('_buildUrl with query', () => {
      let url = _buildUrl(source, { query: { a: '1' } });
      expect(url).toBe(source + '?a=1');

      url = _buildUrl(source, { query: { a: 'a', b: undefined } });
      expect(url).toBe(source + '?a=a&b=');
    });
  });

  describe('_openUrl test', () => {
    const source = 'https://www.hstar.vip/';
    it('_openUrl in current window', () => {
      _openUrl(source);
      // TODO: How to test it?
    });
    it('_openUrl in new window', () => {
      _openUrl(source, { newWindow: true });
      // TODO: How to test it?
    });
    it('_openUrl in new window with download', () => {
      _openUrl(source, { newWindow: true, download: 'down' });
      // TODO: How to test it?
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
