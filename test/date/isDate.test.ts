import { isBefore, isAfter, isBetween } from '../../ts/date/isDate'

const today: Date = new Date()
const startDate: Date = new Date()
const endDate: Date = new Date()
startDate.setDate(Number(today.getDate()) - 5)
endDate.setDate(Number(today.getDate()) + 5)

test('Is today before '+endDate.toJSON(), () => {
  expect(isBefore(today, endDate)).toBe(true)
  expect(isBefore(today, startDate)).toBe(false)
})

test('Is today after '+endDate.toJSON(), () => {
  expect(isAfter(today, endDate, 'date')).toBe(false)
  expect(isAfter(today, startDate, 'date')).toBe(true)
})

test('Is today between '+startDate.toJSON()+' and '+endDate.toJSON(), () => {
  expect(isBetween(today, startDate, endDate)).toBe(true)
})
