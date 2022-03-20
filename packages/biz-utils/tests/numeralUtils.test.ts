import { numberAdd } from '../src';

describe('numeralUtils test', () => {
  describe('numberAdd test', () => {
    it('add once', () => {
      expect(numberAdd(0.1, 0.2)).toBe('0.3');
      expect(numberAdd(0.2, 0.4)).toBe('0.6');
    });

    it('add many times', () => {
      expect(numberAdd(0.1, 0.2, 0.3, 0.4)).toBe('1');
    });
  });
});
