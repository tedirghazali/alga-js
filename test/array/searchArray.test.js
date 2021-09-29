import { search, searchBy } from '../../js/array/searchArray.js'

const fromArray = [
  { id: '1', name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
  { id: '2', name: 'Dawoud Tedir', office: 'Medan', age: 27 },
  { id: '3', name: 'Harist Tedir', office: 'Sigli', age: 15 },
  { id: '4', name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
  { id: '5', name: 'Hanbal Usman', office: 'Langsa', age: 27 },
  { id: '6', name: 'Dawoud Usman', office: 'Pidie', age: 25 },
  { id: '7', name: 'Harist Usman', office: 'Samarinda', age: 18 },
  { id: '8', name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
  { id: '9', name: 'Bukhari Usman', office: 'Makassar', age: 44 },
  { id: '10', name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35 },
  { id: '11', name: 'Zulkifli Usman', office: 'Manado', age: 56 },
  { id: '12', name: 'Teuku Usman', office: 'Ternate', age: 58 }
]

test('Single search in array of objects', () => {
  expect(search(fromArray, 'ba')).toEqual([
    { id: '1', name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
    { id: '4', name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
    { id: '5', name: 'Hanbal Usman', office: 'Langsa', age: 27 },
    { id: '8', name: 'Ghazali Usman', office: 'Balikpapan', age: 45 }
  ])
})

test('Multiple search in array of objects', () => {
  expect(search(fromArray, 'oud', 'lan')).toEqual([
    { id: '2', name: 'Dawoud Tedir', office: 'Medan', age: 27 },
    { id: '6', name: 'Dawoud Usman', office: 'Pidie', age: 25 },
    { id: '5', name: 'Hanbal Usman', office: 'Langsa', age: 27 }
  ])
})

test('search array only', () => {
  expect(search(['Medan', 'Langsa', 'Banda Aceh', 'Pidie', 'Lamda'], 'da')).toEqual([ 'Medan', 'Banda Aceh', 'Lamda' ])
})

test('Searching by property in array of objects', () => {
  expect(searchBy(fromArray, ['dan', 'han'], ['name', 'office'])).toEqual([
    { id: '2', name: 'Dawoud Tedir', office: 'Medan', age: 27 },
    { id: '1', name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
    { id: '5', name: 'Hanbal Usman', office: 'Langsa', age: 27 }
  ])
})
