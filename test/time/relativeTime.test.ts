import { relative } from '../../ts/time/relativeTime'

const secondDate: Date = new Date()
const minuteDate: Date = new Date()
const hourDate: Date = new Date()
const dayDate: Date = new Date()
const monthDate: Date = new Date()
const yearDate: Date = new Date()
secondDate.setSeconds(Number(secondDate.getSeconds()) - 8)
minuteDate.setMinutes(Number(minuteDate.getMinutes()) - 7)
hourDate.setHours(Number(hourDate.getHours()) - 6)
dayDate.setDate(Number(dayDate.getDate()) - 5)
monthDate.setMonth(Number(monthDate.getMonth()) - 4)
yearDate.setFullYear(Number(yearDate.getFullYear()) - 3)

test('The relative time of date from now', () => {
  expect(relative(secondDate)).toBe('8 seconds ago')
  expect(relative(minuteDate)).toBe('7 minutes ago')
  expect(relative(hourDate)).toBe('6 hours ago')
  expect(relative(dayDate)).toBe('5 days ago')
  expect(relative(monthDate)).toBe('4 months ago')
  expect(relative(yearDate)).toBe('3 years ago')
})
