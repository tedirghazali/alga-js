import type { IsDate } from './dateType.js'

export const modeDateHelper = (date: IsDate, mode: string): number => {
  let numberDate: number = 0
  const jsonDate: string[] = new Date(date).toJSON().split(/T|\./)
  if(mode === 'date') {
    numberDate = Number(jsonDate[0].replaceAll('-', ''))
  } else if(mode === 'time') {
    numberDate = Number(jsonDate[1].replaceAll(':', ''))
  } else {
    numberDate = new Date(date).valueOf()
  }
  return numberDate
}

export const getYearHelper = (): number => {
  return Number(new Date().getFullYear())
}

export const getMonthHelper = (): number => {
  return Number(new Date().getMonth())
}

export const getDayHelper = (): number => {
  return Number(new Date().getDate())
}
