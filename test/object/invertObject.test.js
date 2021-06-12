import { invert } from '../../js/object/invertObject.js'

test('Inverting object keys with values and vice versa', () => {
  expect(invert({ name: 'Tedir Ghazali', age: 28, active: true })).toEqual({ '28': 'age', 'Tedir Ghazali': 'name', true: 'active' })
  expect(invert({ '28': 'age', 'Tedir Ghazali': 'name', true: 'active' })).toEqual({ age: '28', name: 'Tedir Ghazali', active: 'true' })
})
