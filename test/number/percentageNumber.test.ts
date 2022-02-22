import { percentage } from '../../ts/number/percentageNumber'

test('Percentage numbers from number', () => {
  expect(percentage(10, 20, false)).toBe("-50")
  expect(percentage(30, 20, true)).toBe("50%")
})

