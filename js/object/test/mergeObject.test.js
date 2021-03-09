import data from './objectData.js'
import { merge, replace } from '../mergeObject.js'

test('Merge between object values', () => {
  expect(merge(data.first, { name: 'Zulkifli Usman', position: 'Alga.js Developer' })).toEqual({
    id: 1,
    name: 'Tedir Ghazali',
    office: 'Banda Aceh',
    age: 29,
    position: 'Alga.js Developer'
  })
})

test('Replace object values with other object values', () => {
  expect(replace(data.first, { name: 'Zulkifli Usman', position: 'Alga.js Developer' })).toEqual({
    id: 1,
    name: 'Zulkifli Usman',
    office: 'Banda Aceh',
    age: 29,
    position: 'Alga.js Developer'
  })
})
