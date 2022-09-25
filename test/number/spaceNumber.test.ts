import { spaceBetween } from '../../ts/number/spaceNumber'

test('Space between every 4 numbers', () => {
  expect(spaceBetween(1234567890123456)).toEqual('1234 5678 9012 3456')
  expect(spaceBetween('1234567890123456')).toEqual('1234 5678 9012 3456')
})
