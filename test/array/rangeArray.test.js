import { range } from '../../js/array/rangeArray.js'

test('get range of numbers in array', () => {
  expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  expect(range(3, 11)).toEqual([3, 4, 5,  6, 7, 8, 9, 10])
  expect(range(0, 30, 5)).toEqual([ 0, 5, 10, 15, 20, 25 ])
  expect(range(-3, 11)).toEqual([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(range(-4)).toEqual([ -3, -2, -1, 0 ])
  expect(range(-2, -7)).toEqual([ -6, -5, -4, -3, -2 ])
  expect(range(0, -10, -1)).toEqual([-9, -8, -7, -6, -5, -4, -3, -2, -1, 0])
  expect(range(0)).toEqual([])
})
