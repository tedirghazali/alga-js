import { unit } from '../../ts/number/unitNumber'

test('Normal unit of number format', () => {
  expect(unit(2022)).toBe("2.02K")
  expect(unit(2022000000)).toBe("2.02G")
})

test('Decimal unit of number format', () => {
  expect(unit(2548, 1, 'decimal')).toBe("2.5k")
  expect(unit(2548000000, 1, 'decimal')).toBe("2.5G")
})

test('Money unit of number format', () => {
  expect(unit(2022, 1, 'money')).toBe("2K")
  expect(unit(2022000000, 1, 'money')).toBe("2B")
})

test('Binary unit of number format', () => {
  expect(unit(2548, 1, 'binary')).toBe("2.5Ki")
  expect(unit(2548000000, 1, 'binary')).toBe("2.5Gi")
})

test('Byte unit of number format', () => {
  expect(unit(2048, 1, 'byte')).toBe("2KB")
  expect(unit(2048000000, 1, 'byte')).toBe("2GB")
})
