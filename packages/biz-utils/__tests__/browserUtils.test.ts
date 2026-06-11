import { copyText, getQuery } from '../src';
import { ArgumentError } from '../src/errors';

describe('browserUtils test', () => {
  describe('getQuery test', () => {
    beforeEach(() => {
      window.history.replaceState({}, '', '/?a=1&b=c&d&a=2');
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

      serach = 'tab=stars';
      expect(getQuery(serach).tab).toBe('stars');

      serach = '?';
      expect(getQuery(serach).u).toBe(undefined);
    });
  });

  describe('download test', () => {});

  describe('downloadBlob test', () => {});

  describe('copyText test', () => {
    beforeEach(() => {
      document.execCommand = jest.fn();
    });

    it('copyText ok', async () => {
      await copyText('Hello');
      expect(document.execCommand).toHaveBeenCalledTimes(1);
      expect(document.execCommand).toHaveBeenCalledWith('copy');
    });

    it('copyText uses async clipboard API in secure context', async () => {
      const writeText = jest.fn().mockResolvedValue(undefined);
      Object.defineProperty(window, 'isSecureContext', { value: true, configurable: true });
      Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });

      await copyText('Hello');
      expect(writeText).toHaveBeenCalledWith('Hello');
      expect(document.execCommand).not.toHaveBeenCalled();

      Object.defineProperty(window, 'isSecureContext', { value: false, configurable: true });
      Object.defineProperty(navigator, 'clipboard', { value: undefined, configurable: true });
    });

    it('copyText rejects when execCommand reports failure', async () => {
      document.execCommand = jest.fn().mockReturnValue(false);
      await expect(copyText('Hello')).rejects.toThrow('copy command failed');
    });

    it('copyText argument error', async () => {
      expect(() => {
        copyText({} as any);
      }).toThrow(ArgumentError);
    });

    it('copyText failed', async () => {
      // 有一个断言
      expect.assertions(1);
      document.execCommand = null as any;
      try {
        // 只要传空字符串或则选择文本失败，就会抛出错误
        await copyText('');
      } catch (err) {
        // err 有值
        expect(err).toBeTruthy();
      }
    });

    it('copyText called failed', async () => {
      // 有一个断言
      expect.assertions(1);
      document.createElement = null as any;
      try {
        // 只要传空字符串或则选择文本失败，就会抛出错误
        await copyText('Hello');
      } catch (err) {
        // err 有值
        expect(err).toBeInstanceOf(TypeError);
      }
    });
  });
});
