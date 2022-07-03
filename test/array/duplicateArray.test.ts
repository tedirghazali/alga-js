import { duplication, duplicationGroup } from '../../ts/array/duplicateArray'

const arrOfObjs = [
  {id: 1, name: 'Tedir Ghazali', age: 30},
  {id: 2, name: 'Bukhari Zulkifli', age: 35},
  {id: 3, name: 'Husnul', age: 30},
  {id: 4, name: 'Nurjannah Usman', age: 35},
  {id: 5, name: 'Boyhaki', age: 25},
  {id: 6, name: 'Boy', age: 25},
  {id: 7, name: 'Murad', age: 30},
  {id: 8, name: 'Kharul', age: 21}
]
const arrOfNums = [1, 2, 2, 6, 3, 4, 5, 6, 6]

test('Filter the duplication', () => {
  expect(duplication(arrOfNums)).toEqual([ 2, 2, 6, 6, 6 ])
  expect(duplication(arrOfObjs, 'age')).toEqual([
    { id: 1, name: 'Tedir Ghazali', age: 30 },
    { id: 3, name: 'Husnul', age: 30 },
    { id: 7, name: 'Murad', age: 30 },
    { id: 2, name: 'Bukhari Zulkifli', age: 35 },
    { id: 4, name: 'Nurjannah Usman', age: 35 },
    { id: 5, name: 'Boyhaki', age: 25 },
    { id: 6, name: 'Boy', age: 25 }
  ])
})

test('Group the duplication', () => {
  expect(duplicationGroup(arrOfNums)).toEqual({ '1': [ 1, 3, 4, 5 ], '2': [ 2, 2 ], '3': [ 6, 6, 6 ] })
  expect(duplicationGroup(arrOfObjs, 'age')).toEqual({
    '1': [ { id: 8, name: 'Kharul', age: 21 } ],
    '2': [
      { id: 2, name: 'Bukhari Zulkifli', age: 35 },
      { id: 4, name: 'Nurjannah Usman', age: 35 },
      { id: 5, name: 'Boyhaki', age: 25 },
      { id: 6, name: 'Boy', age: 25 }
    ],
    '3': [
      { id: 1, name: 'Tedir Ghazali', age: 30 },
      { id: 3, name: 'Husnul', age: 30 },
      { id: 7, name: 'Murad', age: 30 }
    ]
  })
})
