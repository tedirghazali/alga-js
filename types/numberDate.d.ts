import type { IsDate } from './dateType';
export declare const daysInMonth: (yearNum?: number, monthNum?: number) => number;
export declare const daysOfPrevMonth: (yearNum?: number, monthNum?: number) => number[];
export declare const daysOfNextMonth: (yearNum?: number, monthNum?: number) => number;
export declare const daysInYear: (yearNum?: number) => number;
export declare const daysInBetween: (startDate: IsDate, endDate: IsDate, modeDate?: string) => number;
