import { countDuplication } from '../countArray.js'

test('Count all the duplication elements', () => {
  expect(countDuplication([2, 3, 3])).toEqual({ '1': [ 2 ], '2': [ 3, 3 ] })
})
