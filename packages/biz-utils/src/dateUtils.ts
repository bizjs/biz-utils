import dayjs from 'dayjs';
import { isInteger } from 'lodash';
import { ArgumentError } from './errors';

const FormatTemplateMap: Record<string, string> = {
  datetime: 'YYYY-MM-DD HH:mm:ss',
  date: 'YYYY-MM-DD',
  time: 'HH:mm:ss',
};

type DateLike = string | number | Date;

/**
 * 格式化日期
 * @param date
 * @param formatTemplate
 * @returns
 */
export function formatDate(date: DateLike, formatTemplate: 'datetime' | 'date' | 'time'): string;
export function formatDate(date: DateLike, formatTemplate: string): string;
export function formatDate(date: DateLike, formatTemplate: any): string {
  if (!date) {
    throw new ArgumentError('date should not be empty.', 'date');
  }
  const finalTemplate: string = FormatTemplateMap[formatTemplate] || formatTemplate;
  return dayjs(date).format(finalTemplate);
}

/**
 * 获取 T+N 日期，
 * @param tNum
 * @param date 开始日期，如果不传则默认为当前日期
 * @returns
 */
export function getTDate(tNum: number, date?: DateLike): Date {
  if (!isInteger(tNum)) {
    throw new ArgumentError('tNum should be an integer.', 'tNum');
  }

  let finalDate = date;
  if (!date) {
    finalDate = new Date();
  }

  return dayjs(date).add(Number(tNum), 'days').toDate();
}
