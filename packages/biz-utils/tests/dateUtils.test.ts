import dayjs from 'dayjs';
import { formatDate, getTDate } from '../src';
import { ArgumentError } from '../src/errors';

function fillZero(num: number): string {
  return `00${num}`.slice(-2);
}

describe('dateUtils test', () => {
  describe('formatDate test', () => {
    it('formatDate with Date ok', () => {
      const dateNow = new Date();
      const dateStr = `${dateNow.getFullYear()}-${fillZero(dateNow.getMonth() + 1)}-${fillZero(dateNow.getDate())}`;
      const timeStr = `${fillZero(dateNow.getHours())}:${fillZero(dateNow.getMinutes())}:${fillZero(
        dateNow.getSeconds(),
      )}`;
      expect(formatDate(dateNow, 'datetime')).toBe(`${dateStr} ${timeStr}`);
      expect(formatDate(dateNow, 'date')).toBe(dateStr);
      expect(formatDate(dateNow, 'time')).toBe(timeStr);
      expect(formatDate(dateNow, 'YYYY')).toBe(dateNow.getFullYear().toString());
    });

    it('formatDate with date str ok', () => {
      const source = '2022-03-20 19:07:33';
      expect(formatDate(source, 'datetime')).toBe(source);
      expect(formatDate(source, 'date')).toBe(source.split(' ')[0]);
      expect(formatDate(source, 'time')).toBe(source.split(' ')[1]);
      expect(formatDate(source, 'YYYY')).toBe('2022');
    });

    it('formatDate with timestamp ok', () => {
      const source = 1647774523633;
      const targetStr = '2022-03-20 19:08:43';
      expect(formatDate(source, 'datetime')).toBe(targetStr);
      expect(formatDate(source, 'date')).toBe(targetStr.split(' ')[0]);
      expect(formatDate(source, 'time')).toBe(targetStr.split(' ')[1]);
      expect(formatDate(source, 'ss')).toBe('43');
    });

    it('formatDate with no date should throw an error', () => {
      expect(() => {
        (formatDate as any)();
      }).toThrowError(ArgumentError);
    });
  });

  describe('getTDate test', () => {
    it('getTDate from now ok', () => {
      expect(getTDate(-10).getDate()).toBe(dayjs().add(-10, 'days').toDate().getDate());
      expect(getTDate(5).getDate()).toBe(dayjs().add(5, 'days').toDate().getDate());
    });

    it('getTDate from special date ok', () => {
      const d = new Date(2022, 2, 20);
      expect(getTDate(-2, d).getDate()).toBe(18);
      expect(getTDate(4, d).getDate()).toBe(24);
    });

    it('getTDate use error args should throw an error', () => {
      expect(() => {
        getTDate('' as any);
      }).toThrowError(ArgumentError);

      expect(() => {
        expect(getTDate('3' as any, new Date()).getDate()).toBe(23);
      }).toThrowError(ArgumentError);
    });
  });
});
