import { uniqid } from '../../ts/string/uniqString'

test('Generate unique id', () => {
  const uniq = uniqid(35)
  expect(uniq).toEqual(uniq)
})
