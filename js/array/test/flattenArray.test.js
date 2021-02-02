import { flatten } from '../flattenArray.js'

const values = [
  { 
    id: '1', 
    name: 'Tedir Ghazali', 
    children: [
      { id: '11', name: 'Hanbal Tedir' },
      { id: '12', name: 'Dawoud Tedir' },
      { id: '13', name: 'Harist Tedir' }
    ]
  },
  {
    id: '2',
    name: 'Zulkifli Usman',
    children: [
      { id: '21', name: 'Ghazali Usman' },
      { id: '22', name: 'Bukhari Usman' },
      { id: '23', name: 'Boyhaki Usman' }
    ]
  }
]

const results = [
  { id: '11', name: 'Hanbal Tedir', parent: '1' },
  { id: '12', name: 'Dawoud Tedir', parent: '1' },
  { id: '13', name: 'Harist Tedir', parent: '1' },
  { id: '1', name: 'Tedir Ghazali', parent: '0' },
  { id: '21', name: 'Ghazali Usman', parent: '2' },
  { id: '22', name: 'Bukhari Usman', parent: '2' },
  { id: '23', name: 'Boyhaki Usman', parent: '2' },
  { id: '2', name: 'Zulkifli Usman', parent: '0' }
]

test('Flatting the nested array', () => {
  expect(flatten(values)).toEqual(results)
})
