import { toPercentage, fromPercentage } from '../../ts/time/percentageTime'

test('Time to percentage', () => {
  expect(toPercentage('282:45')).toBe('282.75')
})

test('Percentage to time', () => {
  expect(fromPercentage(282.75)).toBe('282:45:0')
})
