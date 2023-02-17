import { now } from '../../ts/date/nowDate'
import { format } from '../../ts/date/formatDate'

test('now in string', () => {
  //console.log(now())
  //console.log(now('date', 'ace-ID', {timeZone: 'UTC'}))
})

test('format in string', () => {
  expect(format('2023-03-02', 'date', 'ace-ID', {timeZone: 'UTC'})).toBe('3/2/2023')
  expect(format('2023-03-02', 'time', 'ace-ID', {timeZone: 'UTC'})).toBe('12:00:00 AM')
})

