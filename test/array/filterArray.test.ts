import { filter } from '../../ts/array/filterArray'
import { search, searchBy } from '../../ts/array/searchArray'

const arrayOfObjects = [
  { id: 1, name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
  { id: 2, name: 'Dawoud Tedir', office: 'Medan', age: 27 },
  { id: 3, name: 'Jarir Tedir', office: 'Sigli', age: 12 },
  { id: 4, name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
  { id: 5, name: 'Hanbal Usman', office: 'Langsa', age: 27 },
  { id: 6, name: 'Dawoud Usman', office: 'Sigli', age: 25 },
  { id: 7, name: 'Jarir Usman', office: 'Samarinda', age: 18 },
  { id: 8, name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
  { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 12 },
  { id: 10, name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35 },
  { id: 11, name: 'Zulkifli Usman', office: 'Manado', age: 56 },
  { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 }
]

const filterObject = {
  id: '',
  name: 'Jarir',
  office: '',
  age: '12'
}

test('Filtering array of objects', () => {
  expect(filter(arrayOfObjects, filterObject)).toEqual([{ id: 3, name: 'Jarir Tedir', office: 'Sigli', age: 12 }])
})

test('Searching array of objects', () => {
  expect(search(arrayOfObjects, 'Sigli', 12)).toEqual([
    { id: 3, name: 'Jarir Tedir', office: 'Sigli', age: 12 },
    { id: 6, name: 'Dawoud Usman', office: 'Sigli', age: 25 },
    { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 12 },
    { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 }
  ])
  expect(search(arrayOfObjects, ['Jarir', 12])).toEqual([
    { id: 3, name: 'Jarir Tedir', office: 'Sigli', age: 12 },
    { id: 7, name: 'Jarir Usman', office: 'Samarinda', age: 18 },
    { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 12 },
    { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 }
  ])
})

test('PageInfo is an object data about how many entries', () => {
  expect(searchBy(arrayOfObjects, ['Sigli', 12], ['office', 'age'])).toEqual([
    { id: 3, name: 'Jarir Tedir', office: 'Sigli', age: 12 },
    { id: 6, name: 'Dawoud Usman', office: 'Sigli', age: 25 },
    { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 12 }
  ])
})
