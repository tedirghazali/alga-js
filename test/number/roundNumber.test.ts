import { roundOf } from '../../ts/number/roundNumber'

test('Round of the long numbers', () => {
  expect(roundOf(15734567890123456)).toEqual(16000000000000000)
})
