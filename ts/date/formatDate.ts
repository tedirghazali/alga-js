import { doubleFormat } from './stringDate'

export const format = (date: Date | string | number, type: string = '', locale: string = '', options: any = {}) => {
  const newDate: Date = new Date(date || null)
  let newValue = `${newDate.getFullYear()}-${doubleFormat(Number(newDate.getMonth()) + 1)}-${doubleFormat(newDate.getDate())} ${doubleFormat(newDate.getHours())}:${doubleFormat(newDate.getMinutes())}:${doubleFormat(newDate.getSeconds())}`
  if(locale === '' && options?.timeZone === 'UTC') {
    newValue = `${newDate.getUTCFullYear()}-${doubleFormat(Number(newDate.getUTCMonth()) + 1)}-${doubleFormat(newDate.getUTCDate())} ${doubleFormat(newDate.getUTCHours())}:${doubleFormat(newDate.getUTCMinutes())}:${doubleFormat(newDate.getUTCSeconds())}`
  }
  
  if(type === 'date') {
    newValue = `${newDate.getFullYear()}-${doubleFormat(Number(newDate.getMonth()) + 1)}-${doubleFormat(newDate.getDate())}`
    if(locale === '' && options?.timeZone === 'UTC') {
      newValue = `${newDate.getUTCFullYear()}-${doubleFormat(Number(newDate.getUTCMonth()) + 1)}-${doubleFormat(newDate.getUTCDate())}`
    }
    
    if(locale !== '') {
      newValue = newDate.toLocaleDateString(locale, options)
    }
  } else if(type === 'time') {
    newValue = `${doubleFormat(newDate.getHours())}:${doubleFormat(newDate.getMinutes())}:${doubleFormat(newDate.getSeconds())}`
    if(locale === '' && options?.timeZone === 'UTC') {
      newValue = `${doubleFormat(newDate.getUTCHours())}:${doubleFormat(newDate.getUTCMinutes())}:${doubleFormat(newDate.getUTCSeconds())}`
    }
    
    if(locale !== '') {
      newValue = newDate.toLocaleTimeString(locale, options)
    }
  } else {
    if(locale !== '') {
      newValue = newDate.toLocaleString(locale, options)
    }
  }
  
  return newValue
}
