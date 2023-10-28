import { week, weeks, weekDates } from '../../ts/date/weekDate'

test('Current week', () => {
  expect(week(new Date(2023, 9, 28))).toBe(43)
})

test('Weeks in year', () => {
  expect(weeks()).toBe(53)
})

test('Week dates or 7 days', () => {
  expect(weekDates(new Date(2023, 9, 28))).toEqual([
    '2023-10-22',
    '2023-10-23',
    '2023-10-24',
    '2023-10-25',
    '2023-10-26',
    '2023-10-27',
    '2023-10-28'
  ])
})
