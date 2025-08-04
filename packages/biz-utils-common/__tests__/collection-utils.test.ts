import { distinct, arr2obj, splitIntoGroups } from '../src';
import { ArgumentError } from '../src/errors';

describe('moreUtils test', () => {
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

  describe('arr2obj test', () => {
    it('arr2obj normal', () => {
      const testData = [
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
      ];

      const r0 = arr2obj(testData, x => x.id);
      expect(r0).toEqual({ '1': { id: '1', name: 'Alice' }, '2': { id: '2', name: 'Bob' } });

      const r1 = arr2obj(
        testData,
        x => x.id,
        x => x.name,
      );
      expect(r1).toEqual({ '1': 'Alice', '2': 'Bob' });
    });
  });
});
