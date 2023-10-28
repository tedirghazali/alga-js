import { now } from '../../ts/time/nowTime'
import { format } from '../../ts/time/formatTime'
import { double } from '../../ts/time/doubleTime'

/*test('Now time', () => {
  console.log(now())
})*/

test('Formatted time', () => {
  expect(format('8')).toBe('8:0')
})

test('Double number of time', () => {
  expect(double('8:5:0')).toBe('08:05:00')
})
