import { separator } from '../../ts/number/separatorNumber'

test('Comman separator of numbers', () => {
  expect(separator(2022, ',', false)).toBe("2,022")
  expect(separator(2022, ',', true)).toBe("2,022.00")
})

test('Dot separator of numbers', () => {
  expect(separator(2022, '.', false)).toBe("2.022")
  expect(separator(2022, '.', true)).toBe("2.022,00")
})

