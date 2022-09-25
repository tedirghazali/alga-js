import { separator } from '../../ts/number/separatorNumber'

test('Comma separator of numbers', () => {
  expect(separator(2022, ',')).toBe("2,022")
  expect(separator(2022.00, ',', true)).toBe("2,022.00")
})

test('Dot separator of numbers', () => {
  expect(separator(2022, '.')).toBe("2.022")
  expect(separator(2022.00, '.', true)).toBe("2.022,00")
})
