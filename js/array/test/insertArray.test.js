import { insert, insertArray, insertObject } from '../insertArray.js'

test('insert data into the first element in array', () => {
  expect(insert('a', ['b', 'c'], 'first')).toEqual(['a', 'b', 'c'])
})

test('insert data into the default element in array', () => {
  expect(insert('a', ['b', 'c'])).toEqual(['b', 'c', 'a'])
})

test('insert data into the last element in array', () => {
  expect(insert('a', ['b', 'c'], 'last')).toEqual(['b', 'c', 'a'])
})

test('insert data before or in between the elements in array', () => {
  expect(insert('a', ['b', 'c'], 'before', 2)).toEqual(['b', 'a', 'c'])
})

test('insert data after or in between the elements in array', () => {
  expect(insert('a', ['b', 'c'], 'after', 0)).toEqual(['b', 'a', 'c'])
})

test('insert data as array into the default element in array', () => {
  expect(insertArray(['a', 'd', 'e'], ['b', 'c'])).toEqual(['b', 'c', 'a', 'd', 'e'])
})

test('insert data as array into the last element in array', () => {
  expect(insertArray(['a', 'd', 'e'], ['b', 'c'], 'last')).toEqual(['b', 'c', 'a', 'd', 'e'])
})

test('insert data as array into the first element in array', () => {
  expect(insertArray(['a', 'd', 'e'], ['b', 'c'], 'first')).toEqual(['a', 'd', 'e', 'b', 'c'])
})

test('insert data as array before the element by index in array', () => {
  expect(insertArray(['a', 'd', 'e'], ['b', 'c'], 'before', 2)).toEqual(['b', 'a', 'd', 'e', 'c'])
})

test('insert data as array after the element by index in array', () => {
  expect(insertArray(['a', 'd', 'e'], ['b', 'c'], 'after', 0)).toEqual(['b', 'a', 'd', 'e', 'c'])
})

const values = [
  { id: 1, name: 'Tedir Ghazali' },
  { id: 2, name: 'Bukhari Zulkifli' }
]
const objects = { id: 3, name: 'Boyhaki Zulkifli' }
const results = [
  { id: 1, name: 'Tedir Ghazali' },
  { id: 3, name: 'Boyhaki Zulkifli' },
  { id: 2, name: 'Bukhari Zulkifli' }
]

test('insert object data by property key and turn it to array', () => {
  expect(insertObject(objects, values, 'id')).toEqual(results)
})

test('insert object data after the data of property key and turn it to array', () => {
  expect(insertObject(objects, values, 'id', 'after')).toEqual(results)
})

test('insert object data before the data of property key and turn it to array', () => {
  const result2 = [
    { id: 1, name: 'Tedir Ghazali' },
    { id: 3, name: 'Boyhaki Zulkifli' },
    { id: 2, name: 'Bukhari Zulkifli' }
  ]
  expect(insertObject(objects, values, 'id', 'before')).toEqual(result2)
})

