import { toggle } from '../toggleArray.js'

test('toggle the existing element in array', () => {
  const values = ['a', 'b', 'c']
  expect(toggle('a')(values)).toEqual(['b', 'c'])
})

test('toggle the new element in array', () => {
  const values = ['b', 'c']
  expect(toggle('a')(values)).toEqual(['b', 'c', 'a'])
})

