import { distinct, generateUniqueId, generateUuid, getExtName, safeJSONParse } from '../src';
import { ArgumentError } from '../src/errors';

describe('moreUtils test', () => {
  describe('generateUuid test', () => {
    it('generateUuid should return an uuid', () => {
      let uuid = generateUuid(); // 如：48ad56d8-2608-4a39-ae63-bb7d260dee57
      expect(uuid).toHaveLength(36);
      // 一共有四根中横线
      expect(uuid.match(/\-/g)).toHaveLength(4);
      // 符合特定正则
      const UUID_REG = /^[0-9a-z]{8}(-[0-9a-z]{4}){3}-[0-9a-z]{12}$/;
      expect(UUID_REG.test(uuid)).toBe(true);
    });
  });

  describe('generateUniqueId test', () => {
    it('generateUniqueId should return an unique id', () => {
      let uniqueId = generateUniqueId(); // 如：bb7d260dee57
      expect(uniqueId).toHaveLength(12);

      // 符合特定正则
      const UNIQUE_ID_REG = /^[0-9a-z]{12}$/;
      expect(UNIQUE_ID_REG.test(uniqueId)).toBe(true);
    });

    it('generateUniqueId can set unique id length', () => {
      let uniqueId = generateUniqueId(8);
      expect(uniqueId).toHaveLength(8);
      // 符合特定正则
      let UNIQUE_ID_REG = /^[0-9a-z]{8}$/;
      expect(UNIQUE_ID_REG.test(uniqueId)).toBe(true);

      uniqueId = generateUniqueId(32);
      expect(uniqueId).toHaveLength(32);
      // 符合特定正则
      UNIQUE_ID_REG = /^[0-9a-z]{32}$/;
      expect(UNIQUE_ID_REG.test(uniqueId)).toBe(true);
    });

    it('generateUniqueId argument error', () => {
      expect(() => {
        generateUniqueId(7);
      }).toThrow(ArgumentError);

      expect(() => {
        generateUniqueId(33);
      }).toThrow(ArgumentError);
    });
  });

  describe('safeJSONParse test', () => {
    it('safeJSONParse should parse the json string', () => {
      let jsonString = '[1,2,3]';
      let obj = safeJSONParse(jsonString);
      expect(obj).toHaveLength(3);

      jsonString = '[{"a":"2"},2,3]';
      obj = safeJSONParse(jsonString);
      expect(obj[0].a).toBe('2');

      jsonString = '{"k":"v"}';
      obj = safeJSONParse(jsonString);
      expect(obj.k).toBe('v');

      jsonString = '{"a":{"b":{"c":{"d":"666"}}}}';
      obj = safeJSONParse(jsonString);
      expect(obj.a.b.c.d).toBe('666');
    });

    it('safeJSONParse should return fallback value', () => {
      let jsonString = '[1,2,3}';
      let obj = safeJSONParse(jsonString);
      // default fallback value is null
      expect(obj).toBe(null);
      obj = safeJSONParse(jsonString, { fallbackValue: 'hi' });
      // 使用指定的 fallback value
      expect(obj).toBe('hi');
    });

    it('safeJSONParse with argument error', () => {
      expect(() => {
        safeJSONParse({} as any);
      }).toThrow(ArgumentError);
    });
  });

  describe('distinct test', () => {
    it('distinct the array', () => {
      let arr: any[] = [1, 2, 3, 1, 2, 5];
      let result = distinct(arr);
      expect(result).toHaveLength(4);
      expect(result).toEqual([1, 2, 3, 5]);

      arr = [{ a: 1 }, { a: 1 }];
      result = distinct(arr);
      expect(result).toHaveLength(2);
    });

    // 这才是典型场景
    it('distinct with special key function', () => {
      let arr: any[] = [{ a: 1 }, { a: 1 }];
      let result = distinct(arr, x => x.a);
      expect(result).toHaveLength(1);
    });

    it('distinct with argument error', () => {
      expect(() => {
        distinct({} as any);
      }).toThrow(ArgumentError);

      expect(() => {
        distinct(1 as any);
      }).toThrow(ArgumentError);

      expect(() => {
        distinct('1' as any);
      }).toThrow(ArgumentError);
    });
  });

  describe('getExtName test', () => {
    it('getExtName normal', () => {
      let filepath = 'fdas/bafdas/fdasf/a.json';
      let ext = getExtName(filepath);
      expect(ext).toBe('.json');

      // 无扩展名
      filepath = 'fdas/bafdas/fdasf/a';
      ext = getExtName(filepath);
      expect(ext).toBe('');

      filepath = 'fdas/bafdas/fdasf/hi.Jpeg';
      ext = getExtName(filepath);
      expect(ext).toBe('.Jpeg');
      // 扩展名全小写
      ext = getExtName(filepath, { toLower: true });
      expect(ext).toBe('.jpeg');
    });

    it('getExtName with argument error', () => {
      expect(() => {
        getExtName({} as any);
      }).toThrow(ArgumentError);

      expect(() => {
        getExtName(1 as any);
      }).toThrow(ArgumentError);
    });
  });
});
