import { isYear, isMonth } from './isDate.js'
import msgDate from './msgDate.js'

export const month = (yearParam, monthParam, locale = 'en-US', monthType = 'long') => {
  if(!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthParam)) {
    throw new Error(msgDate.monthMsg)
  }
  
  const currentMonth = Date.UTC(yearParam, Number(monthParam) - 1)
  return new Intl.DateTimeFormat(locale, {month: monthType}).format(new Date(currentMonth))
}

export const months = (locale = 'en-US', monthType = 'long') => {
  const monthNames = []
  for(let i = 0;i <= 11;i++) {
    const currentMonth = Date.UTC(2021, i)
    monthNames.push(new Intl.DateTimeFormat(locale, {month: monthType}).format(new Date(currentMonth)))
  }
  return monthNames
}
