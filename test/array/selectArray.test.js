import data from './arrayData.js'
import { select, hidden } from '../../js/array/selectArray.js'

const results = [
  { name: 'Hanbal Tedir', office: 'Jakarta' },
  { name: 'Dawoud Tedir', office: 'Medan' },
  { name: 'Harist Tedir', office: 'Sigli' },
  { name: 'Annisa Tedir', office: 'Banda Aceh' },
  { name: 'Hanbal Usman', office: 'Langsa' },
  { name: 'Dawoud Usman', office: 'Pidie' },
  { name: 'Harist Usman', office: 'Samarinda' },
  { name: 'Rizal Usman', office: 'Balikpapan' },
  { name: 'Bukhari Usman', office: 'Makassar' },
  { name: 'Boyhaki Usman', office: 'Jaya Pura' },
  { name: 'Zulkifli Usman', office: 'Manado' },
  { name: 'Teuku Usman', office: 'Ternate' }
]

test('Select array of objects by property name', () => {
  expect(select(data.third, 'name', 'office')).toEqual(results)
})

test('Hide some property from array of objects', () => {
  expect(hidden(data.third, 'id', 'position', 'startdate', 'salary', 'extension')).toEqual(results)
})
