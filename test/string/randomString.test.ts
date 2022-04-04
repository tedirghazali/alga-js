import { random } from '../../ts/string/randomString'

test('Generate random characters', () => {
  const rand = random(11, 'alphanumeric')
  //console.log(rand)
  expect(rand).toEqual(rand)
})
