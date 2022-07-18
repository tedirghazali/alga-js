import type { IsDate } from './dateType'
import { modeDateHelper, getYearHelper, getMonthHelper } from './dateHelper'
import { doubleFormat } from './stringDate'

export const month = (yearArg: number = getYearHelper(), monthArg: number = getMonthHelper(), locale: string = 'en-US', monthType: string = 'long'): string => {
  const currentMonth: Date = new Date(yearArg, Number(monthArg) - 1)
  //@ts-ignore
  return new Intl.DateTimeFormat(locale, {month: monthType }).format(currentMonth)
}

export const months = (locale: string = 'en-US', monthType: string = 'long'): any[] => {
  const newMonths: any[] = []
  const newYear: number = Number(new Date().getFullYear())
  for(let i = 0;i <= 11;i++) {
    const newObj: any = {} 
    const currentMonth: Date = new Date(newYear, i)
    newObj['value'] = doubleFormat(Number(i) + 1)
    //@ts-ignore
    newObj['text'] = new Intl.DateTimeFormat(locale, {month: monthType}).format(currentMonth)
    newMonths.push(newObj)
  }
  return newMonths
}
