import { paginate, pagination, pages, pageInfo } from '../../ts/array/paginateArray'

const arrayOfObjects = [
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
const currentPage = 3
const limitPerPage = 5

test('Paginate entries', () => {
  expect(paginate(arrayOfObjects, currentPage, limitPerPage)).toEqual([
    { id: 11, name: 'Zulkifli Usman', office: 'Manado', age: 56 },
    { id: 12, name: 'Teuku Usman', office: 'Ternate', age: 58 }
  ])
})

test('Pagination is series of page numbers in array of string', () => {
  expect(pagination(12, 5, 2)).toEqual(['...', '3', '4', '5', '6', '7', '...'])
})

test('Pages is a total number of pages', () => {
  expect(pages(arrayOfObjects, limitPerPage)).toBe(3)
})

test('PageInfo is an object data about how many entries', () => {
  expect(pageInfo(arrayOfObjects, currentPage, limitPerPage)).toEqual({ start: 11, from: 11, end: 12, to: 12, length: 12, of: 12 })
})
