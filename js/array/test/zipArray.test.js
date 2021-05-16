import { zip } from '../zipArray.js'

test('Zip the values of each of arrays and store them as object', () => {
  expect(zip(['name', 'age', 'active'], ['Tedir Ghazali', 'Bukhari Usman', 'Boyhaki Usman'], [28, 24, 20], [true, false, true])).toEqual([
    {name: 'Tedir Ghazali', age: 28, active: true},
    {name: 'Bukhari Usman', age: 24, active: false},
    {name: 'Boyhaki Usman', age: 20, active: true}
  ])
})
