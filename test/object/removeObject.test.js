import data from './objectData.js'
import { remove, removeBy } from '../../js/object/removeObject.js'

test('Remove object properties by its key or name', () => {
  expect(remove('name', 'office')(data.first)).toEqual({ id: 1, age: 29 })
})

test('Remove object properties by its value', () => {
  expect(removeBy(1, 29)(data.first)).toEqual({ name: 'Tedir Ghazali', office: 'Banda Aceh' })
})
