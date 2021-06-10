import { transpose } from '../../js/array/transposeArray.js'

test('Transpose for zip the values of each of the arrays', () => {
  expect(transpose(['Tedir Ghazali', 'Bukhari Usman', 'Boyhaki Usman'], [28, 24, 20], [true, false, true])).toEqual([
    ['Tedir Ghazali', 28, true],
    ['Bukhari Usman', 24, false],
    ['Boyhaki Usman', 20, true]
  ])
})

test('Transpose for unzip the values of each of the arrays', () => {
  expect(transpose(['Tedir Ghazali', 28, true], ['Bukhari Usman', 24, false], ['Boyhaki Usman', 20, true])).toEqual([
    ['Tedir Ghazali', 'Bukhari Usman', 'Boyhaki Usman'],
    [28, 24, 20],
    [true, false, true]
  ])
})
