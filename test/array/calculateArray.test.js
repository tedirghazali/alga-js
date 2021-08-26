import { calculate } from '../../js/array/calculateArray.js'

const fromArray = [
  { name: 'Item-1', quantity: 6, price: 12, total: 0 },
  { name: 'Item-2', quantity: 5, price: 7.5, total: 0 },
  { name: 'Item-3', quantity: 3, price: 4 },
  { name: 'Item-4', quantity: 7, price: 9.6 }
]

test('Calculate properties in array of objects', () => {
  expect(calculate(fromArray, 'total', (quantity, price) => Number(quantity) * Number(price))).toEqual([
    { name: 'Item-1', quantity: 6, price: 12, total: 72 },
    { name: 'Item-2', quantity: 5, price: 7.5, total: 37.5 },
    { name: 'Item-3', quantity: 3, price: 4, total: 12 },
    { name: 'Item-4', quantity: 7, price: 9.6, total: 67.2 }
  ])
})
