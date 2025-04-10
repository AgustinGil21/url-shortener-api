import { TDate } from '../types/interfaces';

export default class DateHelper {
  static getTimestamp(date?: TDate) {
    return date ? new Date(date).toISOString() : new Date().toISOString();
  }

  static getMilliseconds(date?: Date | string) {
    return date ? new Date(date).getTime() : Date.now();
  }
}
