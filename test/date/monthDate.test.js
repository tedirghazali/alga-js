import { month, months } from '../../js/date/monthDate.js'

test('Get a month name', () => {
  expect(month(2021, 6, 'id-ID')).toBe('Juni')
})

test('Get all month names in one year', () => {
  expect(months('id-ID')).toEqual(['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November',  'Desember'])
})
