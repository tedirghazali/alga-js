import { addDate } from '../../js/date/addDate.js'
import { subtractDate } from '../../js/date/subtractDate.js'
import { rangeDate } from '../../js/date/rangeDate.js'

test('Add one or more days to the date', () => {
  expect(addDate(new Date(2021, 5, 13), 6, 'YYYY-MM-DD')).toBe('2021-06-19')
})

test('Subtract one or more days from the date', () => {
  expect(subtractDate(new Date(2021, 5, 19), 6, 'YYYY-MM-DD')).toBe('2021-06-13')
})

test('Create a range of dates or all the date in between two dates', () => {
  expect(rangeDate(new Date(2021, 5, 13), new Date(2021, 5, 19), 'YYYY-MM-DD')).toEqual([
    '2021-06-13',
    '2021-06-14',
    '2021-06-15',
    '2021-06-16',
    '2021-06-17',
    '2021-06-18',
    '2021-06-19'
  ])
})
