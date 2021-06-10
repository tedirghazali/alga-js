import { random } from '../../js/char/randomChar.js'

test('Generate random character', () => {
  console.log(random())
})

test('Generate random hex for color', () => {
  console.log(random(6, 'hex'))
})

test('Generate random password', () => {
  console.log(random(8, 'password'))
})
