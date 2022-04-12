import { nested } from '../../ts/array/nestedArray'

const flattenArray = [
  {id: '1', name: 'Tedir Ghazali', parent: '0'},
  {id: '2', name: 'Teuku Usman', parent: '0'},
  {id: '3', name: 'Zulkifli Usman', parent: '2'},
  {id: '4', name: 'Bukhari Zulkifli', parent: '3'},
  {id: '5', name: 'Husnul', parent: '10'},
  {id: '6', name: 'Nurjannah', parent: '10'},
  {id: '7', name: 'Boyhaki Zulkifli', parent: '3'},
  {id: '8', name: 'Boyhaki Usman', parent: '2'},
  {id: '9', name: 'Murad', parent: '5'}
]

test('Nesting the flatten version array of objects', () => {
  expect(nested(flattenArray, {prop: 'id', parent: 'parent', children: 'children'})).toEqual([
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
  ])
})
