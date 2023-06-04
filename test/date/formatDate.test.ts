import { now } from '../../ts/date/nowDate'
import { format } from '../../ts/date/formatDate'
import { add, sub } from '../../ts/date/calcDate'

test('now in string', () => {
  //console.log(now())
  //console.log(now('date', 'ace-ID', {timeZone: 'UTC'}))
})

test('format date in string', () => {
  expect(format('2023-03-02', 'date', 'ace-ID', {timeZone: 'UTC'})).toBe('3/2/2023')
  expect(format('2023-03-02', 'time', 'ace-ID', {timeZone: 'UTC'})).toBe('12:00:00 AM')
})

test('calc date in string', () => {
  expect(add('2023-03-02', 1, 'date')).toBe('2023-03-03')
  expect(sub('2023-03-02', 1, 'date')).toBe('2023-03-01')
})
