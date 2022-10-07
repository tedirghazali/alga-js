import { removeByKey, removeByVal } from '../../ts/object/removeObject'

const newObj: any = {
  id: 0,
  name: 'Object Value',
  type: 'Object',
  content: '',
  sources: [],
  children: {}
}

test('Remove object props by key', () => {
  expect(removeByKey(newObj, 'sources', 'children')).toEqual({ id: 0, name: 'Object Value', type: 'Object', content: '' })
})

test('Remove object props by value', () => {
  expect(removeByVal(newObj, 0, '', [], {})).toEqual({ name: 'Object Value', type: 'Object' })
})
