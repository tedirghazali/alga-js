import { doubleFormat } from './stringDate'
import { format } from './formatDate'

export const add = (date: Date | string | number, value: number, type: string = '', locale: string = '', options: any = {}) => {
  const newDate: Date = new Date(date || null)
  newDate.setDate(newDate.getDate() + (value || 1))
  return format(newDate, type, locale, options)
}

export const sub = (date: Date | string | number, value: number, type: string = '', locale: string = '', options: any = {}) => {
  const newDate: Date = new Date(date || null)
  newDate.setDate(newDate.getDate() - (value || 1))
  return format(newDate, type, locale, options)
}
