import { math } from '../../ts/array/mathArray'

const examOfArrs = [
  11, 12, 31, 21, 32,
  33, 22, 34, 41, 51,
  13, 23, 35, 42, 52,
  14, 36, 24, 25, 37
]

const objOfArrs = [
  {value: 35},
  {value: 32},
  {value: 37},
  {value: 45},
  {value: 25},
  {value: 15}
]

test('Math Max of numbers in array', () => {
  expect(math(examOfArrs, 'max')).toBe(52)
})

test('Math Min of numbers in array', () => {
  expect(math(examOfArrs, 'min')).toBe(11)
})

test('Math Max of objects in array', () => {
  expect(math(objOfArrs, 'max', 'value')).toBe(45)
})
