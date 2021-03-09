import data from './arrayData.js'
import { index } from '../indexArray.js'

test('get index by using object id from array', () => {
  expect(index(data.third, { key: 'id', value: 161 })).toBe(2)
})

test('get index 2 by using object id from array', () => {
  expect(index(data.third, { id: 162 })).toBe(3)
})
