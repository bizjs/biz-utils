import { getQuery } from '../src';

describe('browserUtils test', () => {
  describe('getQuery test', () => {
    let spy: jest.SpyInstance<Location, []>;
    beforeEach(() => {
      spy = jest.spyOn(window, 'location', 'get');
      spy.mockImplementation(() => {
        return { search: '?a=1&b=c&d&a=2' } as any;
      });
    });
    afterEach(() => {
      spy.mockClear();
    });

    it('getQurey from location ok', () => {
      const query = getQuery();
      expect(query.a).toBe('1'); // 取第一个有效值
      expect(query.b).toBe('c');
      expect(query.d).toBe('');
    });

    it('getQurey from special search text ok', () => {
      let serach = '?u=123';
      expect(getQuery(serach).u).toBe('123');

      serach = 'https://github.com/hstarorg?tab=stars';
      expect(getQuery(serach).tab).toBe('stars');

      serach = '?';
      expect(getQuery(serach).u).toBe(undefined);
    });
  });
});
