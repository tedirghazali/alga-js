import { group } from '../../js/array/groupArray.js'
import arrayData from './arrayData.js'
import { parse } from '../../js/date/parseDate.js'

test('Grouping the array value by callback', () => {
  //console.log(group([4.2, 5.1, 4.3, 5.2, 5.3, 6.4], Math.floor))
  //=> { '4': [ 4.2, 4.3 ], '5': [ 5.1, 5.2, 5.3 ], '6': [ 6.4 ] }
  //console.log(group(['one', 'two', 'three', 'four', 'five', 'six', 'seven'], (word) => word.length))
  //=> { '3': [ 'one', 'two', 'six' ], '4': [ 'four', 'five' ], '5': [ 'three', 'seven' ] }
  expect(group(arrayData.third, (obj) => new Date(parse(obj.startdate, 'YYYY-MM-DD')).getDate())).toEqual({
      '1': [
        {
          id: 159,
          name: 'Hanbal Tedir',
          position: 'Alga.js Developer',
          office: 'Jakarta',
          extension: 2456,
          startdate: '2011-10-01',
          salary: 160000
        },
        {
          id: 160,
          name: 'Dawoud Tedir',
          position: 'Alga.js Developer',
          office: 'Medan',
          extension: 2456,
          startdate: '2011-10-01',
          salary: 270000
        },
        {
          id: 161,
          name: 'Harist Tedir',
          position: 'Alga.js Developer',
          office: 'Sigli',
          extension: 2456,
          startdate: '2011-10-01',
          salary: 150000
        }
      ],
      '2': [
        {
          id: 162,
          name: 'Annisa Tedir',
          position: 'Alga.js Developer',
          office: 'Banda Aceh',
          extension: 2456,
          startdate: '2011-10-02',
          salary: 290000
        },
        {
          id: 163,
          name: 'Hanbal Usman',
          position: 'Alga.js Developer',
          office: 'Langsa',
          extension: 2456,
          startdate: '2011-10-02',
          salary: 270000
        }
      ],
      '3': [
        {
          id: 164,
          name: 'Dawoud Usman',
          position: 'Alga.js Developer',
          office: 'Pidie',
          extension: 2456,
          startdate: '2011-10-03',
          salary: 250000
        },
        {
          id: 165,
          name: 'Harist Usman',
          position: 'Alga.js Developer',
          office: 'Samarinda',
          extension: 2456,
          startdate: '2011-10-03',
          salary: 180000
        },
        {
          id: 166,
          name: 'Rizal Usman',
          position: 'Alga.js Developer',
          office: 'Balikpapan',
          extension: 2456,
          startdate: '2011-10-03',
          salary: 450000
        },
        {
          id: 167,
          name: 'Bukhari Usman',
          position: 'Alga.js Developer',
          office: 'Makassar',
          extension: 2456,
          startdate: '2011-10-03',
          salary: 440000
        }
      ],
      '4': [
        {
          id: 168,
          name: 'Boyhaki Usman',
          position: 'Alga.js Developer',
          office: 'Jaya Pura',
          extension: 2456,
          startdate: '2011-10-04',
          salary: 35000
        }
      ],
      '5': [
        {
          id: 169,
          name: 'Zulkifli Usman',
          position: 'Alga.js Developer',
          office: 'Manado',
          extension: 2456,
          startdate: '2011-10-05',
          salary: 560000
        },
        {
          id: 170,
          name: 'Teuku Usman',
          position: 'Alga.js Developer',
          office: 'Ternate',
          extension: 2456,
          startdate: '2011-10-05',
          salary: 580000
        }
      ]
  })
})
