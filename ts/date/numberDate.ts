import type { IsDate } from './dateType'
import { modeDateHelper, getYearHelper, getMonthHelper } from './dateHelper'

export const daysInMonth = (yearNum: number = getYearHelper(), monthNum: number = getMonthHelper()): number => {
  const commonDays: number[] = [28, 29, 30, 31]
  const numOfDays: number = Number(new Date(yearNum, monthNum, 0).getDate())
  return (commonDays.includes(numOfDays)) ? numOfDays : 31
}

export const daysOfPrevMonth = (yearNum: number = getYearHelper(), monthNum: number = getMonthHelper()): number[] => {
  const prevDays: number[] = []
  const getDays: number = Number(new Date(yearNum, Number(monthNum) - 1, 1).getDay())
  for(let i = Number(getDays) - 1; i >= 0; i--) {
    prevDays.push(Number(new Date(yearNum, Number(monthNum) - 1, Number('-'+i)).getDate()))
  }
  return prevDays
}
  
export const daysOfNextMonth = (yearNum: number = getYearHelper(), monthNum: number = getMonthHelper()): number => {
  const getDays: number = Number(new Date(yearNum, Number(monthNum) - 1, daysInMonth(yearNum, monthNum)).getDay())
  const nextMonthDays = 6 - Number(getDays)
  const totalMonthDays = Number(daysInMonth(yearNum, monthNum)) + Number(daysOfPrevMonth(yearNum, monthNum).length) + Number(nextMonthDays)
  return Number(nextMonthDays) + (42 - Number(totalMonthDays))
}

export const daysInYear = (yearNum: number = getYearHelper()): number => {
  return (Number(yearNum) % 400 === 0 || (Number(yearNum) % 100 !== 0 && Number(yearNum) % 4 === 0)) ? 366 : 365
}

export const daysInBetween = (startDate: IsDate, endDate: IsDate, modeDate: string = 'dateTime'): number => {
  const startNum: number = modeDateHelper(startDate, modeDate)
  const endNum: number = modeDateHelper(endDate, modeDate)
  const timeDifference: number = Number(endNum) - Number(startNum)
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24))
}

export const monthsInBetween = (startDate: IsDate, endDate: IsDate): number => {
  const calcMonth: number = Number(new Date(endDate).getMonth()) - Number(new Date(startDate).getMonth())
  const calcYear: number = (Number(new Date(endDate).getFullYear()) - Number(new Date(startDate).getFullYear())) * 12
  return Math.floor(calcMonth + calcYear)
}

export const yearsInBetween = (startDate: IsDate, endDate: IsDate): number => {
  return Math.floor(monthsInBetween(startDate, endDate) / 12)
}
