import { currency } from '../../js/number/currencyNumber.js'

test('Money or currency format', () => {
  expect(currency(2485000, 'IDR', 'id-ID')).toEqual('Rp 2.485.000,00')
})
