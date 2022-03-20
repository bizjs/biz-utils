import dayjs from 'dayjs';
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
