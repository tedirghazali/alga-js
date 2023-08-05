import { filterByKey, filterByVal } from '../../ts/object/filterObject'

const newObj: any = {
  "Youtube_Video_1":"Fe3bof8B-08",
  "Youtube_Video_2":"IqW9XNhy11k",
  "Youtube_Video_3":"1W9VeoDbr-g",
  "Youtube_Video_4":"dQDO7KXo0NQ",
  "Youtube_Video_5":"FR2nryPNwFw",
  "createdAt":"2023-08-03T11:12:07.925Z",
  "updatedAt":"2023-08-03T11:20:31.991Z",
  "Youtube_Title_1":"Title Text 1",
  "Youtube_Title_2":"Title Text 2",
  "Youtube_Title_3":"Title Text 3",
  "Youtube_Title_4":"Title Text 4",
  "Youtube_Title_5":"Title Text 5"
}

test('Filter object props by key', () => {
  expect(filterByKey(newObj, 'Youtube_')).toEqual({
    Youtube_Video_1: 'Fe3bof8B-08',
    Youtube_Video_2: 'IqW9XNhy11k',
    Youtube_Video_3: '1W9VeoDbr-g',
    Youtube_Video_4: 'dQDO7KXo0NQ',
    Youtube_Video_5: 'FR2nryPNwFw',
    Youtube_Title_1: 'Title Text 1',
    Youtube_Title_2: 'Title Text 2',
    Youtube_Title_3: 'Title Text 3',
    Youtube_Title_4: 'Title Text 4',
    Youtube_Title_5: 'Title Text 5'
  })
  expect(filterByKey(newObj, 'Youtube_', true)).toEqual([
    'Fe3bof8B-08',
    'IqW9XNhy11k',
    '1W9VeoDbr-g',
    'dQDO7KXo0NQ',
    'FR2nryPNwFw',
    'Title Text 1',
    'Title Text 2',
    'Title Text 3',
    'Title Text 4',
    'Title Text 5'
  ])
})

test('Filter object props by value', () => {
  expect(filterByVal(newObj, 'Title Text')).toEqual({
    Youtube_Title_1: 'Title Text 1',
    Youtube_Title_2: 'Title Text 2',
    Youtube_Title_3: 'Title Text 3',
    Youtube_Title_4: 'Title Text 4',
    Youtube_Title_5: 'Title Text 5'
  })
  expect(filterByVal(newObj, 'Title Text', true)).toEqual([
    'Title Text 1',
    'Title Text 2',
    'Title Text 3',
    'Title Text 4',
    'Title Text 5'
  ])
})
