import { flatten } from '../../ts/array/flattenArray'

const nestedArray = [
  {id: '1', name: 'Tedir Ghazali'},
  {id: '2', name: 'Teuku Usman', children: [
    {id: '3', name: 'Zulkifli Usman', children: [ 
      {id: '4', name: 'Bukhari Zulkifli'},
      {id: '7', name: 'Boyhaki Zulkifli'}
    ]},
    {id: '8', name: 'Boyhaki Usman'},
  ]},
  {id: '5', name: 'Husnul', children: [ 
    {id: '9', name: 'Murad'}
  ]},
  {id: '6', name: 'Nurjannah'}
]

test('Flatten the nested array of objects', () => {
  expect(flatten(nestedArray, {prop: 'id', parent: 'parent', children: 'children'})).toEqual([
    {id: '1', name: 'Tedir Ghazali', parent: '0'},
    {id: '4', name: 'Bukhari Zulkifli', parent: '3'},
    {id: '7', name: 'Boyhaki Zulkifli', parent: '3'},
    {id: '3', name: 'Zulkifli Usman', parent: '2'},
    {id: '8', name: 'Boyhaki Usman', parent: '2'},
    {id: '2', name: 'Teuku Usman', parent: '0'},
    {id: '9', name: 'Murad', parent: '5'},
    {id: '5', name: 'Husnul', parent: '0'},
    {id: '6', name: 'Nurjannah', parent: '0'}
  ])
})
