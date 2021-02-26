import { avg } from '../avgArray.js'

const values = [
  { id: 1, name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
  { id: 2, name: 'Dawoud Tedir', office: 'Medan', age: 27 },
  { id: 3, name: 'Harist Tedir', office: 'Sigli', age: 15 },
  { id: 4, name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
  { id: 5, name: 'Hanbal Usman', office: 'Langsa', age: 27 },
  { id: 6, name: 'Dawoud Usman', office: 'Pidie', age: 25 },
  { id: 7, name: 'Harist Usman', office: 'Samarinda', age: 18 },
  { id: 8, name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
  { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 44 },
  { id: 10, name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35 },
  { id: 11, name: 'Zulkifli Usman', office: 'Manado', age: 56 },
  { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 }
]

test('Minimum numbers of all the elements of an array', () => {
  expect(avg([3, 4, 2, 5, 5, 6])).toBe(4)
})

test('Minimum numbers of all the elements of an array of objects', () => {
  expect(avg(values, 'age')).toBe(34)
})

