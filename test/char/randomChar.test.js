import { random } from '../../js/char/randomChar.js'

test('Generate random character', () => {
  expect(random())
})

test('Generate random hex for color', () => {
  expect(random(6, 'hex'))
})

test('Generate random numbers', () => {
  expect(random(3, 'number'))
})

test('Generate random ID', () => {
  expect(random(11, 'short'))
})

test('Generate random numbers and lowercase letters', () => {
  expect(random(8, 'narrow'))
})
