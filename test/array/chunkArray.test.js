import { chunk } from '../../js/array/chunkArray.js'
import { shuffle } from '../../js/array/shuffleArray.js'

test('Split into chunk of array values', () => {
  expect(chunk(['s', 'a', 'b', 'c', 'd', 'e', 'f'], 3)).toEqual([ [ 's', 'a', 'b' ], [ 'c', 'd', 'e' ], [ 'f' ] ])
})

test('Shuffled or randomize the array values', () => {
  //console.log(shuffle(['s', 'a', 'b', 'c', 'd', 'e', 'f']))
})
