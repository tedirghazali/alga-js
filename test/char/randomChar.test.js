import { random } from '../../js/char/randomChar.js'

test('Generate random character', () => {
  console.log(random())
})

test('Generate random hex for color', () => {
  console.log(random(6, 'hex'))
})

test('Generate random numbers', () => {
  console.log(random(3, 'number'))
})

test('Generate random ID', () => {
  console.log(random(11, 'short'))
})

test('Generate random numbers and lowercase letters', () => {
  console.log(random(8, 'narrow'))
})
