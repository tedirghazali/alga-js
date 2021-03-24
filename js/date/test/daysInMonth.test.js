import { daysInMonth, daysInUTCMonth } from '../daysInMonth.js'

const days2020 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days2021 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

test('gets day counts for leap years', () => {
  const actual = days2020.map(
    (day, index) => daysInMonth(2020, index + 1).days
  );
  expect(actual).toEqual(days2020);
})

test('gets day counts for non-leap years', () => {
  const actual = days2021.map(
    (day, index) => daysInMonth(2021, index + 1).days
  );
  expect(actual).toEqual(days2021);
})

test('gets day counts for leap years UTC', () => {
  const actual = days2020.map(
    (day, index) => daysInUTCMonth(2020, index + 1).days
  );
  expect(actual).toEqual(days2020);
})

test('gets day counts for non-leap years UTC', () => {
  const actual = days2021.map(
    (day, index) => daysInUTCMonth(2021, index + 1).days
  );
  expect(actual).toEqual(days2021);
})
