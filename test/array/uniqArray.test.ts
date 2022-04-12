import { uniq } from '../../ts/array/uniqArray'

const arrOfNums = [1, 1, 3, 2, 3, 4, 5, 6, 6, 6, 7, 5]
const arrOfStrs = ['one', 'one', 'three', 'two', 'three', 'four', 'five', 'six', 'six', 'six', 'seven', 'five']
const arrOfObjs = [
  {id: 1, name: 'Tedir Ghazali', age: 30},
  {id: 2, name: 'Bukhari Zulkifli', age: 35},
  {id: 3, name: 'Husnul', age: 30},
  {id: 4, name: 'Nurjannah Usman', age: 35},
  {id: 5, name: 'Boyhaki', age: 25},
  {id: 5, name: 'Boyhaki', age: 25},
  {id: 6, name: 'Murad', age: 30}
]
const arrOfArrs = [
  [1, 1, 3, 2, 3],
  [3, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 3, 2, 2, 3]
]

test('Unique values from array of primitives', () => {
  expect(uniq(arrOfNums)).toEqual([1, 3, 2, 4, 5, 6, 7])
  expect(uniq(arrOfStrs)).toEqual(['one', 'three', 'two', 'four', 'five', 'six', 'seven'])
})

test('Unique values from array of objects', () => {
  expect(uniq(arrOfObjs, 'age')).toEqual([
    { id: 1, name: 'Tedir Ghazali', age: 30 },
    { id: 2, name: 'Bukhari Zulkifli', age: 35 },
    { id: 5, name: 'Boyhaki', age: 25 }
  ])
  expect(uniq(arrOfObjs)).toEqual([
    { id: 1, name: 'Tedir Ghazali', age: 30 },
    { id: 2, name: 'Bukhari Zulkifli', age: 35 },
    { id: 3, name: 'Husnul', age: 30 },
    { id: 4, name: 'Nurjannah Usman', age: 35 },
    { id: 5, name: 'Boyhaki', age: 25 },
    { id: 6, name: 'Murad', age: 30 }
  ])
})

test('Unique values from array of arrays', () => {
  expect(uniq(arrOfArrs, 2)).toEqual([[ 1, 1, 3, 2, 3 ], [ 1, 3, 2, 2, 3 ]])
})
