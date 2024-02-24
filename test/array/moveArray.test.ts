import { move } from '../../ts/array/moveArray'

const arrs = [
  {order: 1, value: 'Abang'},
  {order: 2, value: 'Baca'},
  {order: 3, value: 'Cabang'},
  {order: 4, value: 'Darah'},
  {order: 5, value: 'Ember'},
  {order: 6, value: 'Firdaus'}
]

test('Move baca up', () => {
  expect(move(arrs, 1, 'order', 'up')).toEqual([
    { order: 1, value: 'Baca' },
    { order: 2, value: 'Abang' },
    { order: 3, value: 'Cabang' },
    { order: 4, value: 'Darah' },
    { order: 5, value: 'Ember' },
    { order: 6, value: 'Firdaus' }
  ])
})

test('Move baca down', () => {
  expect(move(arrs, 1, 'order', 'down')).toEqual([
    { order: 1, value: 'Abang' },
    { order: 2, value: 'Cabang' },
    { order: 3, value: 'Baca' },
    { order: 4, value: 'Darah' },
    { order: 5, value: 'Ember' },
    { order: 6, value: 'Firdaus' }
  ])
})

