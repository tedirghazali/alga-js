import { index } from '../indexArray.js'

const values = [
  { id: '1', value: 'Tedir' }, 
  { id: '2', value: 'Ghazali' },
  { id: '3', value: 'Usman' }
]

test('get index by using object id from array', () => {
  expect(index(values, { key: 'id', value: '3' })).toEqual(2)
})
