import { daysInMonth, daysOfPrevMonth, daysOfNextMonth, daysInYear, daysInBetween, monthsInBetween, yearsInBetween } from '../../ts/date/numberDate'

const today: Date = new Date()
const startDate: Date = new Date()
const endDate: Date = new Date()
startDate.setDate(Number(today.getDate()) - 5)
endDate.setDate(Number(today.getDate()) + 5)

test('The number of days in one month only', () => {
  expect(daysInMonth(2022, 2)).toBe(28)
})

test('The number of days from the previous month', () => {
  expect(daysOfPrevMonth(2022, 2)).toEqual([30, 31])
})

test('The number of days from the next month', () => {
  expect(daysOfNextMonth(2022, 2)).toBe(12)
})

test('The number of days in one month only', () => {
  expect(daysInYear(2021)).toBe(365)
  expect(daysInYear(2022)).toBe(365)
  expect(daysInYear(2023)).toBe(365)
  expect(daysInYear(2024)).toBe(366)
})

test('The number of days in between '+startDate.toJSON()+' and '+endDate.toJSON(), () => {
  expect(daysInBetween(startDate, endDate)).toBe(10)
})

test('The number of months in between '+new Date('October 11, 1992 03:24:00').toJSON()+' and '+new Date('2022-01-26T03:24:00').toJSON(), () => {
  expect(monthsInBetween(new Date('October 11, 1992 03:24:00'), new Date('2022-01-26T03:24:00'))).toBe(351)
})

test('The number of years in between '+new Date('October 11, 1992 03:24:00').toJSON()+' and '+new Date('2022-01-26T03:24:00').toJSON(), () => {
  expect(yearsInBetween(new Date('October 11, 1992 03:24:00'), new Date('2022-01-26T03:24:00'))).toBe(29)
})
