import { day, days, daysInMonth, daysInYear, daysInBetween } from '../../js/date/dayDate.js'

const days2020 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days2021 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

test('Get day name and all name in a week', () => {
  expect(day(2021, 6, 21, 'en-US', 'long')).toBe('Monday')
  expect(days('en-US', 'long')).toEqual(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
})

test('Get days in one year', () => {
  expect(daysInYear(2020)).toBe(366)
  expect(daysInYear(2021)).toBe(365)
})

test('Get days in between two dates', () => {
  expect(daysInBetween(new Date(2021, 5, 13), new Date(2021, 5, 19))).toBe(6)
})

test('Gets day counts for leap years', () => {
  const actual = days2020.map(
    (day, index) => daysInMonth(2020, index + 1)
  );
  expect(actual).toEqual(days2020);
})

test('Gets day counts for non-leap years', () => {
  const actual = days2021.map(
    (day, index) => daysInMonth(2021, index + 1)
  );
  expect(actual).toEqual(days2021);
})
