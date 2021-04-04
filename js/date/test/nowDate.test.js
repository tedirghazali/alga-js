import { now } from '../nowDate.js'
import { format } from '../formatDate.js'
import { parse } from '../parseDate.js'

test('Get default', () => {
  console.log(now())
})

test('Get date numbers', () => {
  console.log(now('DD-MM-YYYY'))
})

test('Format date numbers', () => {
  console.log(format(new Date().toString(), 'DD-MM-YYYY'))
})

test('Parse date numbers with date format', () => {
  console.log(parse('04-04-2021', 'DD-MM-YYYY'))
})
