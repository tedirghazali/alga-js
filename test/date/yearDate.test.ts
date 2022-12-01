import { years } from '../../ts/date/yearDate'

test('Array of years', () => {
  expect(years(2022, 5)).toEqual([2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027])
})
