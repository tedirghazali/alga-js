import { now, nowHijri } from '../../js/date/nowDate.js'
import { format } from '../../js/date/formatDate.js'
import { parse } from '../../js/date/parseDate.js'

test('Get date now', () => {
  console.log(now())
  console.log(now('DD-MM-YYYY'))
})

test('Get date from hijri calendar', () => {
  console.log(nowHijri('id-ID'))
})

test('Format the date to custom format numbers', () => {
  expect(format(new Date(2021, 5, 19), 'DD-MM-YYYY')).toBe('19-06-2021')
})

test('Parse date with its format', () => {
  console.log(parse('04-04-2021', 'DD-MM-YYYY'))
})
