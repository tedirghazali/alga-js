import data from './arrayData.js'
import { destroy } from '../../js/array/destroyArray.js'

test('Delete the first data from the array and create a new array after that', () => {
  expect(destroy(['a', 'b', 'c'], 'first')).toEqual(['b', 'c'])
})

test('Delete the last data from the array and create a new array after that', () => {
  expect(destroy(['a', 'b', 'c'], 'last')).toEqual(['a', 'b'])
})

test('Delete the data by index numbers', () => {
  expect(destroy(['a', 'b', 'c', 'd', 'e', 'f'], 0, 1, 3, 5)).toEqual(['c', 'e'])
})

test('Delete the data by object properties', () => {
  expect(destroy(data.third, {id: 161}, 'first', 'last', 4)).toEqual([
    {
      id: 160,
      name: 'Dawoud Tedir',
      position: 'Alga.js Developer',
      office: 'Medan',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 270000
    },
    {
      id: 162,
      name: 'Annisa Tedir',
      position: 'Alga.js Developer',
      office: 'Banda Aceh',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 290000
    },
    {
      id: 164,
      name: 'Dawoud Usman',
      position: 'Alga.js Developer',
      office: 'Pidie',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 250000
    },
    {
      id: 165,
      name: 'Harist Usman',
      position: 'Alga.js Developer',
      office: 'Samarinda',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 180000
    },
    {
      id: 166,
      name: 'Rizal Usman',
      position: 'Alga.js Developer',
      office: 'Balikpapan',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 450000
    },
    {
      id: 167,
      name: 'Bukhari Usman',
      position: 'Alga.js Developer',
      office: 'Makassar',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 440000
    },
    {
      id: 168,
      name: 'Boyhaki Usman',
      position: 'Alga.js Developer',
      office: 'Jaya Pura',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 35000
    },
    {
      id: 169,
      name: 'Zulkifli Usman',
      position: 'Alga.js Developer',
      office: 'Manado',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 560000
    }
  ])
})
