import { isObject, isObjectValues } from '../../js/object/isObject.js'

test('Is this an object or not?', () => {
  expect(isObject({ name: 'Tedir Ghazali', age: 28, active: true })).toEqual(true)
  expect(isObject([['age', '28'], ['name', 'Tedir Ghazali'], ['active', true]])).toEqual(false)
})

test('Is that object has empty values?', () => {
  expect(isObjectValues({ name: 'Tedir Ghazali', age: 28, active: true })).toEqual(true)
  expect(isObjectValues({ name: '', age: 0, active: '' })).toEqual(false)
})
