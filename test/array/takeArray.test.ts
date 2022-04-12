import { take } from '../../ts/array/takeArray'

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

test('Take values from array of objects', () => {
  expect(take(arrOfObjs, 'age')).toEqual([30, 35, 30, 35, 25, 25, 30])
  expect(take(arrOfObjs, 'age', 'uniq')).toEqual([30, 35, 25])
})

test('Filter values from array of objects by callback function with boolean return', () => {
  expect(take(arrOfObjs, ((item) => Number(item.age) === 30), 'age')).toEqual([30, 30, 30])
  expect(take(arrOfObjs, (item) => Number(item.age) === 30)).toEqual([
    { id: 1, name: 'Tedir Ghazali', age: 30 },
    { id: 3, name: 'Husnul', age: 30 },
    { id: 6, name: 'Murad', age: 30 }
  ])
})

test('Take values from array of arrays', () => {
  expect(take(arrOfArrs, 3)).toEqual([2, 4, 4, 2])
  expect(take(arrOfArrs, 3, 'uniq')).toEqual([2, 4])
})
