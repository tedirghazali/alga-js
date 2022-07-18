import { month, months } from '../../ts/date/monthDate'

test('Month name in a string', () => {
  expect(month(2022, 2)).toBe('February')
})

test('12 month names in an object', () => {
  expect(months()).toEqual([
    { value: '01', text: 'January' },
    { value: '02', text: 'February' },
    { value: '03', text: 'March' },
    { value: '04', text: 'April' },
    { value: '05', text: 'May' },
    { value: '06', text: 'June' },
    { value: '07', text: 'July' },
    { value: '08', text: 'August' },
    { value: '09', text: 'September' },
    { value: '10', text: 'October' },
    { value: '11', text: 'November' },
    { value: '12', text: 'December' }
  ])
})
