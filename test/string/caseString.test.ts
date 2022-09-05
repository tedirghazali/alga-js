import { capitalize } from '../../ts/string/capitalizeString'
import { camelCase, pascalCase, snakeCase, kebabCase } from '../../ts/string/caseString'

test('Capitalize letter', () => {
  expect(capitalize('the Capitalize Letter', 'single')).toEqual('The capitalize letter') 
  // options: empty, single, multiple
})

test('camelCase letters', () => {
  expect(camelCase('the_camel-Case letters Test')).toEqual('theCamelCaseLettersTest')
})

test('PascalCase letters', () => {
  expect(pascalCase('the-pascal_Case letters Test')).toEqual('ThePascalCaseLettersTest')
})

test('snake_case letter', () => {
  expect(snakeCase('the-snake-Case Letters Test')).toEqual('the_snake_case_letters_test')
})

test('kebab-case letter', () => {
  expect(kebabCase('the_kebab_Case letter Test')).toEqual('the-kebab-case-letter-test')
})
