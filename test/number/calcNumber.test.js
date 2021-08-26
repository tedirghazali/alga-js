import { calc } from '../../js/number/calcNumber.js'

test('Add the numbers', () => {
  expect(calc(12, 4, 'add')).toEqual(16)
})

test('Subtract the numbers', () => {
  expect(calc(12, 4, 'subtract')).toEqual(8)
})

test('Multiply the numbers', () => {
  expect(calc(12, 4, 'multiply')).toEqual(48)
})

test('Divide the numbers', () => {
  expect(calc(12, 4, 'divide')).toEqual(3)
})

test('Reminder of the numbers', () => {
  expect(calc(12, 4, 'reminder')).toEqual(0)
})

test('Exponent of the numbers', () => {
  expect(calc(12, 4, 'exponent')).toEqual(20736)
})
