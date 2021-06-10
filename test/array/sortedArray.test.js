import { sort, sorted } from '../../js/array/sortedArray.js'

const numbers = [5, 3, 6, 4, 2, 1, 7]
const strings = ['Aba', 'Cara', 'Data', 'Baca', 'Eja', 'Fasih', 'Gara']

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

test('Sort by ascending in numbers', () => {
  expect(sort(numbers, 'asc')).toEqual([1, 2, 3, 4, 5, 6, 7])
})

test('Sort by descending in numbers', () => {
  expect(sort(numbers, 'desc')).toEqual([7, 6, 5, 4, 3, 2, 1])
})

test('Sort by ascending in strings', () => {
  expect(sort(strings, 'asc')).toEqual(['Aba',  'Baca', 'Cara', 'Data', 'Eja',  'Fasih', 'Gara'])
})

test('Sort by descending in strings', () => {
  expect(sort(strings, 'desc')).toEqual(['Gara', 'Fasih', 'Eja',  'Data', 'Cara', 'Baca', 'Aba'])
})

test('Sort by ascending in array of objects', () => {
  expect(sorted(values)('name', 'asc')).toEqual([
    { id: 10, name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35 },
    { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 44 },
    { id: 2, name: 'Dawoud Tedir', office: 'Medan', age: 27 },
    { id: 6, name: 'Dawoud Usman', office: 'Pidie', age: 25 },
    { id: 8, name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
    { id: 1, name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
    { id: 5, name: 'Hanbal Usman', office: 'Langsa', age: 27 },
    { id: 3, name: 'Harist Tedir', office: 'Sigli', age: 15 },
    { id: 7, name: 'Harist Usman', office: 'Samarinda', age: 18 },
    { id: 4, name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
    { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 },
    { id: 11, name: 'Zulkifli Usman', office: 'Manado', age: 56 }
  ])
})

test('Sort by descending in array of objects', () => {
  expect(sorted(values)('name', 'desc')).toEqual([
    { id: 11, name: 'Zulkifli Usman', office: 'Manado', age: 56 },
    { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 },
    { id: 4, name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
    { id: 7, name: 'Harist Usman', office: 'Samarinda', age: 18 },
    { id: 3, name: 'Harist Tedir', office: 'Sigli', age: 15 },
    { id: 5, name: 'Hanbal Usman', office: 'Langsa', age: 27 },
    { id: 1, name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
    { id: 8, name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
    { id: 6, name: 'Dawoud Usman', office: 'Pidie', age: 25 },
    { id: 2, name: 'Dawoud Tedir', office: 'Medan', age: 27 },
    { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 44 },
    { id: 10, name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35 }
  ])
})
