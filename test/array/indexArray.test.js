import data from './arrayData.js'
import { index, toIndex, randomIndex } from '../../js/array/indexArray.js'

test('get index by using object id from array', () => {
  expect(index(data.third, { key: 'id', value: 161 })).toBe(2)
})

test('get index 2 by using object id from array', () => {
  expect(index(data.third, { id: 162 })).toBe(3)
})

test('get all index numbers from array', () => {
  //console.log(randomIndex(data.third))
  expect(toIndex(data.third)).toEqual([0,  1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11]) // on the second argument: 'sparse' or 'dense'
})
