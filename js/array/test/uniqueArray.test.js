import { unique } from '../uniqueArray.js'

const values = [
  { id: 1, name: 'Hanbal Tedir', office: 'Sigli', age: 30 },
  { id: 2, name: 'Dawoud Tedir', office: 'Banda Aceh', age: 27 },
  { id: 3, name: 'Harist Tedir', office: 'Sigli', age: 15 },
  { id: 4, name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
  { id: 5, name: 'Hanbal Usman', office: 'Langsa', age: 27 },
  { id: 6, name: 'Dawoud Usman', office: 'Sigli', age: 25 },
  { id: 7, name: 'Harist Usman', office: 'Langsa', age: 18 },
  { id: 8, name: 'Ghazali Usman', office: 'Banda Aceh', age: 45 },
  { id: 9, name: 'Bukhari Usman', office: 'Banda Aceh', age: 44 },
  { id: 10, name: 'Boyhaki Usman', office: 'Bireuen', age: 35 },
  { id: 11, name: 'Zulkifli Usman', office: 'Singkil', age: 56 },
  { id: 12, name: 'Teuku Usman', office: 'Bireuen', age: 58 }
]

test('Generate unique elements of an array', () => {
  expect(unique([1, 1, 2, 3, 4, 4, 5, 4, 6, 5, 7])).toEqual([1, 2, 3, 4, 5, 6, 7])
})

test('Get unique elements from array of objects and return it to new array', () => {
  expect(unique(values, 'office')).toEqual([ 'Sigli', 'Banda Aceh', 'Langsa', 'Bireuen', 'Singkil' ])
})

