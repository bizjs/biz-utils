import { numberAdd, numberDiv, numberMul, numberSub } from '../src';

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

  describe('numberSub test', () => {
    it('sub once', () => {
      expect(numberSub(0.1, 0.2)).toBe('-0.1');
      expect(numberSub(0.2, 0.4)).toBe('-0.2');
    });

    it('sub many times', () => {
      expect(numberSub(0.1, 0.2, 0.3, 0.4)).toBe('-0.8');
    });
  });

  describe('numberMul test', () => {
    it('mul once', () => {
      expect(numberMul(0.1, 2)).toBe('0.2');
      expect(numberMul(0.2, 2)).toBe('0.4');
    });

    it('mul many times', () => {
      expect(numberMul(0.1, 2, 5, '33')).toBe('33');
    });

    it('mul big number', () => {
      expect(numberMul(10, 1000000, 1000000000000, 1000, 100000, 1000, 100)).toBe('100000000000000000000000000000000');
      expect(numberMul(10, 1000000, -1000000000000, 1000, 100000, 1000, 100)).toBe(
        '-100000000000000000000000000000000',
      );
    });
  });

  describe('numberDiv test', () => {
    it('div once', () => {
      expect(numberDiv(1, 8)).toBe('0.125');
      expect(numberDiv(0.2, 2)).toBe('0.1');
    });

    it('div many times', () => {
      expect(numberDiv(10, 2, 2, 2)).toBe('1.25');
    });
  });
});
