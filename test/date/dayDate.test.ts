import { day, days } from '../../ts/date/dayDate'

test('Day name in a string', () => {
  expect(day('2023-12-05')).toBe('Tuesday')
})

test('7 day names in an array of objects', () => {
  expect(days('2023-12-05')).toEqual([
    { value: '2023-12-03', text: 'Sunday' },
    { value: '2023-12-04', text: 'Monday' },
    { value: '2023-12-05', text: 'Tuesday' },
    { value: '2023-12-06', text: 'Wednesday' },
    { value: '2023-12-07', text: 'Thursday' },
    { value: '2023-12-08', text: 'Friday' },
    { value: '2023-12-09', text: 'Saturday' }
  ])
})
