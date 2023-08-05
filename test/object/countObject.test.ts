import { count } from '../../ts/object/countObject'

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

test('Count object properties', () => {
  expect(count(newObj)).toBe(12)
})
