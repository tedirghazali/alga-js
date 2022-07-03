import { sort, order } from '../../ts/array/sortArray'

const arrayOfObjects = [
  { id: 8, name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
  { id: 4, name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
  { id: 1, name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
  { id: 10, name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35 },
  { id: 5, name: 'Hanbal Usman', office: 'Langsa', age: 27 },
  { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 12 },
  { id: 11, name: 'Zulkifli Usman', office: 'Manado', age: 56 },
  { id: 2, name: 'Dawoud Tedir', office: 'Medan', age: 27 },
  { id: 7, name: 'Jarir Usman', office: 'Samarinda', age: 18 },
  { id: 3, name: 'Jarir Tedir', office: 'Sigli', age: 12 },
  { id: 6, name: 'Dawoud Usman', office: 'Sigli', age: 25 },
  { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 }
]

test('Sorting array of objects', () => {
  expect(sort(arrayOfObjects, 'office', 'desc')).toEqual([
    { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 },
    { id: 3, name: 'Jarir Tedir', office: 'Sigli', age: 12 },
    { id: 6, name: 'Dawoud Usman', office: 'Sigli', age: 25 },
    { id: 7, name: 'Jarir Usman', office: 'Samarinda', age: 18 },
    { id: 2, name: 'Dawoud Tedir', office: 'Medan', age: 27 },
    { id: 11, name: 'Zulkifli Usman', office: 'Manado', age: 56 },
    { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 12 },
    { id: 5, name: 'Hanbal Usman', office: 'Langsa', age: 27 },
    { id: 10, name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35 },
    { id: 1, name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
    { id: 4, name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
    { id: 8, name: 'Ghazali Usman', office: 'Balikpapan', age: 45 }
  ])
})

test('Reordering position of array of objects', () => {
  expect(order(arrayOfObjects, 'order')).toEqual([
    { id: 8, name: 'Ghazali Usman', office: 'Balikpapan', age: 45, order: 1 },
    { id: 4, name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29, order: 2 },
    { id: 1, name: 'Hanbal Tedir', office: 'Jakarta', age: 30, order: 3 },
    { id: 10, name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35, order: 4 },
    { id: 5, name: 'Hanbal Usman', office: 'Langsa', age: 27, order: 5 },
    { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 12, order: 6 },
    { id: 11, name: 'Zulkifli Usman', office: 'Manado', age: 56, order: 7 },
    { id: 2, name: 'Dawoud Tedir', office: 'Medan', age: 27, order: 8 },
    { id: 7, name: 'Jarir Usman', office: 'Samarinda', age: 18, order: 9 },
    { id: 3, name: 'Jarir Tedir', office: 'Sigli', age: 12, order: 10 },
    { id: 6, name: 'Dawoud Usman', office: 'Sigli', age: 25, order: 11 },
    { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58, order: 12 }
  ])
})

