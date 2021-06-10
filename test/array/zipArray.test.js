import { zip } from '../../js/array/zipArray.js'
import { unzip } from '../../js/array/unzipArray.js'

test('Zip the values of each of arrays and store them as object', () => {
  expect(zip(['name', 'age', 'active'], ['Tedir Ghazali', 'Bukhari Usman', 'Boyhaki Usman'], [28, 24, 20], [true, false, true])).toEqual([
    {name: 'Tedir Ghazali', age: 28, active: true},
    {name: 'Bukhari Usman', age: 24, active: false},
    {name: 'Boyhaki Usman', age: 20, active: true}
  ])
})


test('Unzip the values of array of objects and store them as array list', () => {
  expect(unzip({name: 'Tedir Ghazali', age: 28, active: true}, {name: 'Bukhari Usman', age: 24, active: false}, {name: 'Boyhaki Usman', age: 20, active: true})).toEqual([
    ['name', 'age', 'active'],
    ['Tedir Ghazali', 'Bukhari Usman', 'Boyhaki Usman'],
    [28, 24, 20],
    [true, false, true]
  ])
})
