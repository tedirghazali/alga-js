import { shuffle } from '../../ts/array/shuffleArray'

const arrs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

test('Shuffle an array', () => {
  const shuffleArray = shuffle(arrs)
  //console.log(shuffleArray)
  expect(shuffleArray).toEqual(shuffleArray)
})
