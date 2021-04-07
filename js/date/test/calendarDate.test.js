import { calendar, calendarUTC } from '../calendarDate.js'

test('get calendar by month', () => {
  console.log(calendar(2021, 7))
  console.log(calendarUTC(2021, 8))
})

