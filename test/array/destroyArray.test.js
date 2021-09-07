import data from './arrayData.js'
import { destroy } from '../../js/array/destroyArray.js'

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

test('Delete the first data from the array and create a new array after that', () => {
  expect(destroy(['a', 'b', 'c'], 'first')).toEqual(['b', 'c'])
})

test('Delete the last data from the array and create a new array after that', () => {
  expect(destroy(['a', 'b', 'c'], 'last')).toEqual(['a', 'b'])
})

test('Delete the data by index numbers', () => {
  expect(destroy(['a', 'b', 'c', 'd', 'e', 'f'], 0, 1, 3, 5)).toEqual(['c', 'e'])
})

test('Delete the data by object properties', () => {
  expect(destroy(fromArray, {id: '7'}, 'first', 'last', 4)).toEqual([
    { id: '2', name: 'Dawoud Tedir', office: 'Medan', age: 27 },
    { id: '3', name: 'Harist Tedir', office: 'Sigli', age: 15 },
    { id: '4', name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
    { id: '6', name: 'Dawoud Usman', office: 'Pidie', age: 25 },
    { id: '8', name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
    { id: '9', name: 'Bukhari Usman', office: 'Makassar', age: 44 },
    { id: '10', name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35 },
    { id: '11', name: 'Zulkifli Usman', office: 'Manado', age: 56 }
  ])
})
