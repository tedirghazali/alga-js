import data from './objectData.js'
import { remove, removeBy } from '../../js/object/removeObject.js'

test('Remove object properties by its key or name', () => {
  expect(remove(data.first, 'name', 'office')).toEqual({ id: 1, age: 29 })
})

test('Remove object properties by its value', () => {
  expect(removeBy(data.first, 1, 29)).toEqual({ name: 'Tedir Ghazali', office: 'Banda Aceh' })
})
