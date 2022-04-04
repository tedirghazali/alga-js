import type { IsDate } from './dateType';
export declare const isBefore: (isDate: IsDate, beforeDate: IsDate, modeDate?: string) => boolean;
export declare const isAfter: (isDate: IsDate, afterDate: IsDate, modeDate?: string) => boolean;
export declare const isBetween: (isDate: IsDate, startDate: IsDate, endDate: IsDate, modeDate?: string) => boolean;
