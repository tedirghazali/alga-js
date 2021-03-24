import { now } from '../nowDate.js'
import { format } from '../formatDate.js'

test('Get date numbers', () => {
  console.log(now('DD-MM-YYYY'))
})

test('Format date numbers', () => {
  console.log(format(new Date().toString(), 'DD-MM-YYYY'))
})
