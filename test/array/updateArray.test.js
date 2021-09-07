import { update, updateBy } from '../../js/array/updateArray.js'

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

test('Update array of objects by id property', () => {
  expect(update(fromArray, {name: 'Teddy Alex', office: 'Grong-grong'}, { id: '4' })).toEqual([
    { id: '1', name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
    { id: '2', name: 'Dawoud Tedir', office: 'Medan', age: 27 },
    { id: '3', name: 'Harist Tedir', office: 'Sigli', age: 15 },
    { id: '4', name: 'Teddy Alex', office: 'Grong-grong', age: 29 },
    { id: '5', name: 'Hanbal Usman', office: 'Langsa', age: 27 },
    { id: '6', name: 'Dawoud Usman', office: 'Pidie', age: 25 },
    { id: '7', name: 'Harist Usman', office: 'Samarinda', age: 18 },
    { id: '8', name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
    { id: '9', name: 'Bukhari Usman', office: 'Makassar', age: 44 },
    { id: '10', name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35 },
    { id: '11', name: 'Zulkifli Usman', office: 'Manado', age: 56 },
    { id: '12', name: 'Teuku Usman', office: 'Ternate', age: 58 }
  ])
})

test('Update array of objects by index', () => {
  expect(update(fromArray, {name: 'Otto Boy', office: 'Kembang Tanjong'}, 9)).toEqual([
    { id: '1', name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
    { id: '2', name: 'Dawoud Tedir', office: 'Medan', age: 27 },
    { id: '3', name: 'Harist Tedir', office: 'Sigli', age: 15 },
    { id: '4', name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
    { id: '5', name: 'Hanbal Usman', office: 'Langsa', age: 27 },
    { id: '6', name: 'Dawoud Usman', office: 'Pidie', age: 25 },
    { id: '7', name: 'Harist Usman', office: 'Samarinda', age: 18 },
    { id: '8', name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
    { id: '9', name: 'Bukhari Usman', office: 'Makassar', age: 44 },
    { id: '10', name: 'Otto Boy', office: 'Kembang Tanjong', age: 35 },
    { id: '11', name: 'Zulkifli Usman', office: 'Manado', age: 56 },
    { id: '12', name: 'Teuku Usman', office: 'Ternate', age: 58 }
  ])
})

test('Update multiple item in array of objects either by multiple id properties', () => {
  expect(updateBy(fromArray, {deleted: true}, [{id: '1'}, {id: '3'}, {id: '7'}, {id: '10'}, {id: '12'}])).toEqual([
    { id: '1', name: 'Hanbal Tedir', office: 'Jakarta', age: 30, deleted: true },
    { id: '2', name: 'Dawoud Tedir', office: 'Medan', age: 27 },
    { id: '3', name: 'Harist Tedir', office: 'Sigli', age: 15, deleted: true },
    { id: '4', name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
    { id: '5', name: 'Hanbal Usman', office: 'Langsa', age: 27 },
    { id: '6', name: 'Dawoud Usman', office: 'Pidie', age: 25 },
    { id: '7', name: 'Harist Usman', office: 'Samarinda', age: 18, deleted: true },
    { id: '8', name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
    { id: '9', name: 'Bukhari Usman', office: 'Makassar', age: 44 },
    { id: '10', name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35, deleted: true },
    { id: '11', name: 'Zulkifli Usman', office: 'Manado', age: 56 },
    { id: '12', name: 'Teuku Usman', office: 'Ternate', age: 58, deleted: true }
  ])
})

test('Update multiple item in array of objects either by multiple indexes', () => {
  expect(updateBy(fromArray, {updated: false}, [1, 3, 4, 5, 7, 9])).toEqual([
    { id: '1', name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
    { id: '2', name: 'Dawoud Tedir', office: 'Medan', age: 27, updated: false },
    { id: '3', name: 'Harist Tedir', office: 'Sigli', age: 15 },
    { id: '4', name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29, updated: false },
    { id: '5', name: 'Hanbal Usman', office: 'Langsa', age: 27, updated: false },
    { id: '6', name: 'Dawoud Usman', office: 'Pidie', age: 25, updated: false },
    { id: '7', name: 'Harist Usman', office: 'Samarinda', age: 18 },
    { id: '8', name: 'Ghazali Usman', office: 'Balikpapan', age: 45, updated: false },
    { id: '9', name: 'Bukhari Usman', office: 'Makassar', age: 44 },
    { id: '10', name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35, updated: false },
    { id: '11', name: 'Zulkifli Usman', office: 'Manado', age: 56 },
    { id: '12', name: 'Teuku Usman', office: 'Ternate', age: 58 }
  ])
})
