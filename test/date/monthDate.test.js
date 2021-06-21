import { monthName, dayName } from '../../js/date/nameDate.js'

test('Get one or all month names', () => {
  //console.log(monthName('en-US', 'long', 11))
  expect(monthName('id-ID')).toEqual(['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November',  'Desember'])
})

test('Get one or all day names of the week', () => {
  //console.log(dayName('en-US', 'long', 2021, 12, 14))
  expect(dayName('id-ID')).toEqual(['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis',  'Jumat', 'Sabtu'])
})
