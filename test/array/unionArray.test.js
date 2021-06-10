import { isSuperset } from '../../js/array/isArray.js'
import { union } from '../../js/array/unionArray.js'
import { intersection } from '../../js/array/intersectionArray.js'
import { difference, asymmetricDifference, complement, without } from '../../js/array/differenceArray.js'

const arrA = [1, 2, 3, 4]
const arrB = [2, 3]
const arrC = [3, 4, 5, 6]

test('The second array are superset of the first array', () => {
  expect(isSuperset(arrA, arrB)).toEqual(true)
})

test('Merge all the arrays', () => {
  expect(union(arrA, arrB, arrC)).toEqual([1, 2, 3, 4, 5, 6])
})

test('Only get the element of arrays that the same', () => {
  expect(intersection(arrA, arrB, arrC)).toEqual([3])
})

test('Remove all the same element on all the arrays', () => {
  expect(difference(arrA, arrB, arrC)).toEqual([1, 2, 4, 5, 6])
})

test('Remove all the same element on all the arrays', () => {
  expect(asymmetricDifference(arrA, arrB, arrC)).toEqual([1, 5, 6])
})

test('Remove the same element from the first array only and this is unique array', () => {
  expect(complement(arrA, arrB, arrC)).toEqual([1])
})


test('Remove the same element from the first array only', () => {
  expect(without(arrA, arrB)).toEqual([1, 4])
})
