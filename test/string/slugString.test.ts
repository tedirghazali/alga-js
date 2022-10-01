import { slug } from '../../ts/string/slugString'

test('Generate slug url from sentence', () => {
  expect(slug('Nyoë na keuh ticém pö lam bahsa Acèh')).toEqual('nyoe-na-keuh-ticem-po-lam-bahsa-aceh')
  expect(slug('Nyoë na keuh ticém pö lam bahsa Acèh', 10)).toEqual('nyoe-na-ke')
  expect(slug('Nyoë na keuh ticém pö lam bahsa Acèh', 10, 2)).toEqual('nyoe-na-ke-2')
})
