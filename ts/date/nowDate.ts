import { doubleFormat } from './stringDate'
import { format } from './formatDate'

export const now = (type: string = '', locale: string = '', options: any = {}) => {
  const newDate: Date = new Date()
  return format(newDate, type, locale, options)
}
