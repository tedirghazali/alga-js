import { paginate, pages, show } from '../paginateArray.js'

const values = [
  { id: 1, name: 'Hanbal Tedir', office: 'Jakarta', age: 30 },
  { id: 2, name: 'Dawoud Tedir', office: 'Medan', age: 27 },
  { id: 3, name: 'Harist Tedir', office: 'Sigli', age: 15 },
  { id: 4, name: 'Tedir Ghazali', office: 'Banda Aceh', age: 29 },
  { id: 5, name: 'Hanbal Usman', office: 'Langsa', age: 27 },
  { id: 6, name: 'Dawoud Usman', office: 'Pidie', age: 25 },
  { id: 7, name: 'Harist Usman', office: 'Samarinda', age: 18 },
  { id: 8, name: 'Ghazali Usman', office: 'Balikpapan', age: 45 },
  { id: 9, name: 'Bukhari Usman', office: 'Makassar', age: 44 },
  { id: 10, name: 'Boyhaki Usman', office: 'Jaya Pura', age: 35 },
  { id: 11, name: 'Zulkifli Usman', office: 'Manado', age: 56 },
  { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 }
]

test('Paginating in arrays', () => {
  expect(paginate(values)(3, 5)).toEqual([
    { id: 11, name: 'Zulkifli Usman', office: 'Manado', age: 56 },
    { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 }
  ])
})

test('Get pagination page numbers', () => {
  expect(pages(values, 5)).toBe(3)
})


test('Showing active page numbers of pagination', () => {
  expect(show(values)(3, 5)).toEqual({ from: 11, to: 12, of: 12 })
})
