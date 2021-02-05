import { split } from '../splitString.js'

test('Split the string into array', () => {
  const str = 'The quick brown fox jumps over the lazy dog.'
  expect(split(str)(4, 31)).toEqual([ 'The ', 'quick brown fox jumps over ', 'the lazy dog.' ])
})
