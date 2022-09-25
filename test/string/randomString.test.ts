import { random } from '../../ts/string/randomString'

test('Generate random characters', () => {
  /*console.log(random())
  console.log(random(8))
  console.log(random(11, 'alphadash'))
  console.log(random(11, 'alphanumeric'))
  console.log(random(11, 'alpha'))
  console.log(random(6, 'hex'))
  console.log(random(3, 'numeric'))*/
  const rand = random(11, 'alphanumeric')
  expect(rand).toEqual(rand)
})
