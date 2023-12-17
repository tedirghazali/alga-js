import { toDecimal, fromDecimal } from '../../ts/time/decimalTime'

test('Time format to decimal hours', () => {
  expect(toDecimal('282:45:30', 4)).toBe('282.7550')
})

test('Decimal hours to time format', () => {
  expect(fromDecimal(282.755, ':', 3)).toBe('282:45:30')
})
