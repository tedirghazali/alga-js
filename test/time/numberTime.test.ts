import { hoursInBetween } from '../../ts/time/numberTime'

const startDate: Date = new Date('6 Apr, 2015 14:45')
const endDate: Date = new Date('7 May, 2015 02:45')

test('Hours in between 2 dates', () => {
  expect(hoursInBetween(startDate, endDate)).toBe(732)
})
