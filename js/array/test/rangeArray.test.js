import { range } from '../rangeArray.js'

test('get range of numbers in array', () => {
  console.log(range(10))
  console.log(range(-3, 11))
  console.log(range(0, 30, 5))
  console.log(range(-4))
  console.log(range(-2, -7))
  console.log(range(0, -10, -1))
  console.log(range(0))
})
