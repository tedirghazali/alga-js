import { capitalize } from './capitalizeString'

export const camelCase = (strCase: string): string => {
  let newCase: string = strCase.replace(/-|_/g, ' ').replace(/[A-Z]/g, ' $&')
  newCase = capitalize(newCase, 'multiple')
  return newCase.trimStart().replace(/^\w/, (c: string) => c.toLowerCase()).replaceAll(' ', '')
}

export const pascalCase = (strCase: string): string => {
  let newCase: string = strCase.replace(/-|_/g, ' ').replace(/[A-Z]/g, ' $&')
  newCase = capitalize(newCase, 'multiple')
  return newCase.replaceAll(' ', '')
}

export const snakeCase = (strCase: string): string => {
  let newCase: string = strCase.replace(/-|_/g, ' ').replace(/[A-Z]/g, ' $&')
  newCase = capitalize(newCase, 'multiple')
  return newCase.replaceAll(' ', '').replace(/[A-Z]+(?![a-z])|[A-Z]/g, (match, offset) => {
    return (offset > 0 ? '_' : '') + match.toLowerCase()
  })
}

export const kebabCase = (strCase: string): string => {
  let newCase: string = strCase.replace(/-|_/g, ' ').replace(/[A-Z]/g, ' $&')
  newCase = capitalize(newCase, 'multiple')
  return newCase.replaceAll(' ', '').replace(/[A-Z]+(?![a-z])|[A-Z]/g, (match, offset) => {
    return (offset > 0 ? '-' : '') + match.toLowerCase()
  })
}
