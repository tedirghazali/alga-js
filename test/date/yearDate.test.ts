import { years } from '../../ts/date/yearDate'

test('Years in array', () => {
  expect(years(2022, 5)).toEqual([2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027])
})

test('Years with control text', () => {
  expect(years(2022, 5, true)).toEqual([
    { value: 2016, text: 'Prev' },
    { value: 2017, text: 2017 },
    { value: 2018, text: 2018 },
    { value: 2019, text: 2019 },
    { value: 2020, text: 2020 },
    { value: 2021, text: 2021 },
    { value: 2022, text: 2022 },
    { value: 2023, text: 2023 },
    { value: 2024, text: 2024 },
    { value: 2025, text: 2025 },
    { value: 2026, text: 2026 },
    { value: 2027, text: 'Next' }
  ])
})
