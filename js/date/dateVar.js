export const SECOND_IN_MILLISECONDS = 1e3
export const MINUTE_IN_MILLISECONDS = MINUTE_IN_SECONDS * SECOND_IN_MILLISECONDS
export const MINUTE_IN_SECONDS = 60
export const HOUR_IN_MILLISECONDS = HOUR_IN_SECONDS * SECOND_IN_MILLISECONDS
export const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60
export const DAY_IN_MILLISECONDS = DAY_IN_SECONDS * SECOND_IN_MILLISECONDS
export const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24
export const WEEK_IN_MILLISECONDS = WEEK_IN_SECONDS * SECOND_IN_MILLISECONDS
export const WEEK_IN_SECONDS = DAY_IN_SECONDS * 7
  
export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DDTHH:ii:ssZ'
export const INVALID_DATE_STRING = 'Invalid Date'
export const REGEX_PARSE_DATE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
export const REGEX_DATE_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|T|H{1,2}|h{1,2}|a|A|i{1,2}|s{1,2}|Z{1,2}|SSS/g
  
export const DATE_INFO = {
    MS: 'millisecond',
    S: 'second',
    I: 'minute',
    H: 'hour',
    D: 'day',
    W: 'week',
    M: 'month',
    Q: 'quarter',
    Y: 'year',
    DATE: 'date'
}

