import { reading } from '../../ts/time/readingTime'

test('Reading Time Testing', () => {
  expect(reading('saya sangat menyukai pemrograman javascript yang telah saya kuasai selama 10 tahun')).toBe(1)
})
