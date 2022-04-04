import { urlEncode, urlDecode } from '../../ts/string/urlString'

test('Encode full url', () => {
  expect(urlEncode('https://example.com/?x=шеллы', 'raw')).toBe('https://example.com/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B')
})

test('Encode url parameter', () => {
  expect(urlEncode('https://example.com/?x=шеллы', 'param')).toBe('https%3A%2F%2Fexample.com%2F%3Fx%3D%D1%88%D0%B5%D0%BB%D0%BB%D1%8B')
})

test('Decode full url', () => {
  expect(urlDecode('https://example.com/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B', 'raw')).toBe('https://example.com/?x=шеллы')
})

test('Decode url parameter', () => {
  expect(urlDecode('https%3A%2F%2Fexample.com%2F%3Fx%3D%D1%88%D0%B5%D0%BB%D0%BB%D1%8B', 'param')).toBe('https://example.com/?x=шеллы')
})

