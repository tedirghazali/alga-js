import { compact } from '../compactArray.js'

test('Remove all falsy values from array', () => {
  expect(compact([0, 1, false, 2, '', 3, 4, null, undefined])).toEqual([1, 2, 3, 4])
})
