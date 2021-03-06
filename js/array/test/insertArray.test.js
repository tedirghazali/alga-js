import { insert } from '../insertArray.js'

test('insert data into the first element in array', () => {
  expect(insert('a')(['b', 'c']).first()).toEqual(['a', 'b', 'c'])
})

test('insert data into the first element in array 2', () => {
  expect(insert('a')(['b', 'c'], 'first')).toEqual(['a', 'b', 'c'])
})

test('insert data into the last element in array', () => {
  expect(insert('a')(['b', 'c']).last()).toEqual(['b', 'c', 'a'])
})

test('insert data into the last element in array 2', () => {
  expect(insert('a')(['b', 'c'], 'last')).toEqual(['b', 'c', 'a'])
})

test('insert data before or in between the elements in array', () => {
  expect(insert('a')(['b', 'c']).before(2)).toEqual(['b', 'a', 'c'])
})

test('insert data before or in between the elements in array 2', () => {
  expect(insert('a')(['b', 'c'], 'before', 2)).toEqual(['b', 'a', 'c'])
})

test('insert data after or in between the elements in array', () => {
  expect(insert('a')(['b', 'c']).after(0)).toEqual(['b', 'a', 'c'])
})

test('insert data after or in between the elements in array 2', () => {
  expect(insert('a')(['b', 'c'], 'after', 0)).toEqual(['b', 'a', 'c'])
})

test('insert multiple data into the last element in array', () => {
  expect(insert('a', 'd', 'e')(['b', 'c']).last()).toEqual(['b', 'c', 'a', 'd', 'e'])
})

test('insert multiple data into the first element in array', () => {
  expect(insert('a', 'd', 'e')(['b', 'c']).first()).toEqual(['a', 'd', 'e', 'b', 'c'])
})

test('insert multiple data before the element by index in array', () => {
  expect(insert('a', 'd', 'e')(['b', 'c']).before(2)).toEqual(['b', 'a', 'd', 'e', 'c'])
})

test('insert multiple data after the element by index in array', () => {
  expect(insert('a', 'd', 'e')(['b', 'c']).after(0)).toEqual(['b', 'a', 'd', 'e', 'c'])
})

