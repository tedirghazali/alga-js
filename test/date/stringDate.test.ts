import { doubleFormat } from '../../ts/date/stringDate'

test('2 date/time numbers in string', () => {
  expect(doubleFormat(2)).toBe('02')
})

