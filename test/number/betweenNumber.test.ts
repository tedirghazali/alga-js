import { between, isBetween } from '../../ts/number/betweenNumber'

test('Get a random number between two numbers', () => {
  const exclude = between(20, 100)
  const include = between(20, 100, false)
  expect(exclude).toEqual(exclude)
  expect(include).toEqual(include)
})

test('Is this number in between two numbers?', () => {
  expect(isBetween(55, 20, 100)).toEqual(true)
  expect(isBetween(15, 20, 100)).toEqual(false)
})
