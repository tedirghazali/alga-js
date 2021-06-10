import { capitalize } from '../../js/string/capitalizeString.js'

test('Capitalize the first letter of sentence', () => {
  expect(capitalize(' almost before we knew it, we had left the ground.')).toBe('Almost before we knew it, we had left the ground.')
})

test('Capitalize the first letter of each words', () => {
  expect(capitalize(' almost before we knew it, we had left the ground. ', 'multiple')).toBe(' Almost Before We Knew It, We Had Left The Ground. ')
})
