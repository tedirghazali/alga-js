import { spaceBetween } from '../../ts/string/spaceString'

test('Space between every 4 characters', () => {
  expect(spaceBetween(1234567890123456)).toEqual('1234 5678 9012 3456')
})
