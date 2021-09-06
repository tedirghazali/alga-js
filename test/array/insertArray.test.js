import { insert, insertFirst, insertLast, insertBefore, insertAfter } from '../../js/array/insertArray.js'

test('insert data into the first element in array', () => {
  expect(insert(['b', 'c'], {position: 'first'}, 'a')).toEqual(['a', 'b', 'c'])
  expect(insertFirst(['b', 'c'], 'a', 'd', 'e')).toEqual(['a', 'd', 'e', 'b', 'c'])
})

test('insert data into the last element in array', () => {
  expect(insert(['b', 'c'], {position: 'last'}, 'a')).toEqual(['b', 'c', 'a'])
  expect(insertLast(['b', 'c'], 'a', 'd', 'e')).toEqual(['b', 'c', 'a', 'd', 'e'])
})

test('insert data before or in between the elements in array', () => {
  expect(insert(['b', 'c'], {position: 'before', index: 2}, 'a')).toEqual(['b', 'a', 'c'])
  expect(insertBefore(['b', 'c'], 2, 'a', 'd', 'e')).toEqual(['b', 'a', 'd', 'e', 'c'])
})

test('insert data after or in between the elements in array', () => {
  expect(insert(['b', 'c'], {position: 'after', index: 0}, 'a')).toEqual(['b', 'a', 'c'])
  expect(insertAfter(['b', 'c'], 0, 'a', 'd', 'e')).toEqual(['b', 'a', 'd', 'e', 'c'])
})

