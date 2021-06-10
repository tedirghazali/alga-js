import data from './arrayData.js'
import { update } from '../../js/array/updateArray.js'

test('Update data and create a new array after that', () => {
  expect(update({name: 'Teddy Alex', position: 'Vue.js 3 Developer'})(data.third, { id: 160 })).toEqual([
    {
      id: 159,
      name: 'Hanbal Tedir',
      position: 'Alga.js Developer',
      office: 'Jakarta',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 160000
    },
    {
      id: 160,
      name: 'Teddy Alex',
      position: 'Vue.js 3 Developer',
      office: 'Medan',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 270000
    },
    {
      id: 161,
      name: 'Harist Tedir',
      position: 'Alga.js Developer',
      office: 'Sigli',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 150000
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
      id: 163,
      name: 'Hanbal Usman',
      position: 'Alga.js Developer',
      office: 'Langsa',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 270000
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
    },
    {
      id: 170,
      name: 'Teuku Usman',
      position: 'Alga.js Developer',
      office: 'Ternate',
      extension: 2456,
      startdate: '2011-10-11',
      salary: 580000
    }
  ])
})
