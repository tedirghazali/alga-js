import { week, weeks, weekDates } from '../../ts/date/weekDate'

test('Current week', () => {
  expect(week(new Date(2023, 9, 28))).toBe(43)
})

/*test('Weeks in year', () => {
  expect(weeks()).toBe(53) // or 52 depending on what year
})*/

test('Week dates or 7 days', () => {
  expect(weekDates(new Date(2023, 11, 5))).toEqual([
    '2023-12-03',
    '2023-12-04',
    '2023-12-05',
    '2023-12-06',
    '2023-12-07',
    '2023-12-08',
    '2023-12-09'
  ])
})
