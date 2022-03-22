import { _buildUrl, _ensureFunction, _openUrl } from '../src/_internalUtils';

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
  });
});
