import type { UrlQuery } from '../src';
import { parseQuery, stringifyQuery, updateUrl } from '../src';

describe('urlUtils tests', () => {
  describe('updateUrl test', () => {
    const source = 'https://www.hstar.vip/';
    it('_buildUrl with no query', () => {
      let url = updateUrl(source, {});
      expect(url).toBe(source);

      url = updateUrl(source, { query: {} });
      expect(url).toBe(source);

      url = updateUrl(source, { query: undefined });
      expect(url).toBe(source);
    });

    it('updateUrl with query', () => {
      let url = updateUrl(source, { query: { a: '1' } });
      expect(url).toBe(source + '?a=1');

      url = updateUrl(source, { query: { a: 'a', b: undefined } });
      expect(url).toBe(source + '?a=a&b=');
    });
  });

  describe('parseQuery test', () => {
    const source = '?a=1&b=s&c&d=';
    it('parseQuery ok', () => {
      let query = parseQuery(source);
      expect(query.a).toBe('1');
      expect(query.b).toBe('s');
      expect(query.c).toBe('');
      expect(query.d).toBe('');
    });
  });

  describe('stringifyQuery test', () => {
    const source: UrlQuery = { a: '666', b: undefined };
    it('stringifyQuery ok', () => {
      let querystring = stringifyQuery(source);
      expect(querystring).toBe('a=666&b=');
    });
  });
});
