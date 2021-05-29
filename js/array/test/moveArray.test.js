import { move, switched, transfer } from '../moveArray.js'

test('Move the position of array elements', () => {
  expect(move(3, 4, 5)(['a', 'b', 'c', 'd', 'e', 'f'], 1)).toEqual([ 'a', 'd', 'e', 'f', 'b', 'c' ])
})

test('Switch between array elements by index', () => {
  expect(switched(4, 5, 3)(['a', 'b', 'c', 'd', 'e', 'f'], 1, 2, 0)).toEqual([ 'd', 'e', 'f', 'a', 'b', 'c' ])
})

test('Transfer multiple elements from one array to another', () => {
  expect(transfer(4, 5, 3)(['a', 'b', 'c', 'd', 'e', 'f'], ['v', 'w', 'x', 'y', 'z'], 2)).toEqual({
    from: ['a', 'b', 'c'],
    to: ['v', 'w', 'e', 'f', 'd', 'x', 'y', 'z']
  })
})
