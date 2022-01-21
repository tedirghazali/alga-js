import type { IsDate } from './dateType'
import { modeDateHelper, getYearHelper, getMonthHelper } from './dateHelper'

export const daysInMonth = (yearNum: number = getYearHelper(), monthNum: number = getMonthHelper()): number => {
  const commonDays: number[] = [28, 29, 30, 31]
  const numOfDays: number = Number(new Date(Date.UTC(Number(yearNum), Number(monthNum), 0)).getUTCDate())
  return (commonDays.includes(numOfDays)) ? numOfDays : 31
}

export const daysOfPrevMonth = (yearNum: number = getYearHelper(), monthNum: number = getMonthHelper()): number[] => {
  const prevDays: number[] = []
  const getDays: number = Number(new Date(Date.UTC(yearNum, Number(monthNum) - 1, 1)).getUTCDay())
  for(let i = Number(getDays) - 1; i >= 0; i--) {
    prevDays.push(Number(new Date(Date.UTC(yearNum, Number(monthNum) - 1, Number('-'+i))).getUTCDate()))
  }
  return prevDays
}
  
export const daysOfNextMonth = (yearNum: number = getYearHelper(), monthNum: number = getMonthHelper()): number => {
  const getDays: number = Number(new Date(Date.UTC(yearNum, Number(monthNum) - 1, daysInMonth(yearNum, monthNum))).getUTCDay())
  return (6 - Number(getDays)) + 7
}

export const daysInYear = (yearNum: number = getYearHelper()): number => {
  return (Number(yearNum) % 400 === 0 || (Number(yearNum) % 100 !== 0 && Number(yearNum) % 4 === 0)) ? 366 : 365
}

export const daysInBetween = (startDate: IsDate, endDate: IsDate, modeDate: string = 'dateTime'): number => {
  const startNum: number = modeDateHelper(startDate, modeDate)
  const endNum: number = modeDateHelper(endDate, modeDate)
  const timeDifference: number = Number(endNum) - Number(startNum)
  return timeDifference / (1000 * 60 * 60 * 24)
}
