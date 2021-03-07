import { remove, removeBy } from '../removeObject.js'

const objVal = { id: '4', name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 }

test('Remove object properties by its key or name', () => {
  expect(remove('name', 'office')(objVal)).toEqual({ id: '4', age: 29 })
})

test('Remove object properties by its value', () => {
  expect(removeBy('4', 29)(objVal)).toEqual({ name: 'Tedir Ghazali', office: 'Banda Aceh' })
})
