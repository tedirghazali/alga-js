import { column } from '../../ts/array/columnArray'

const examOfArrs = [
  11, 12, 31, 21, 32,
  33, 22, 34, 41, 51,
  13, 23, 35, 42, 52,
  14, 36, 24, 25, 37
]

test('Divide array values into multiple columns', () => {
  expect(column(examOfArrs, 3)).toEqual([
    [ 11, 12, 31, 21, 32, 33, 22 ],
    [ 34, 41, 51, 13, 23, 35, 42 ],
    [ 52, 14, 36, 24, 25, 37 ]
  ])
})

