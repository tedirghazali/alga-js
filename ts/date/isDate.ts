import type { IsDate } from './dateType'
import { modeDateHelper } from './dateHelper'

export const isBefore = (isDate: IsDate, beforeDate: IsDate, modeDate: string = 'dateTime'): boolean => {
  const startNum: number = modeDateHelper(isDate, modeDate)
  const endNum: number = modeDateHelper(beforeDate, modeDate)
  let resultDate: boolean = false
  if(startNum < endNum) {
    resultDate = true
  }
  return resultDate
}

export const isAfter = (isDate: IsDate, afterDate: IsDate, modeDate: string = 'dateTime'): boolean => {
  const startNum: number = modeDateHelper(isDate, modeDate)
  const endNum: number = modeDateHelper(afterDate, modeDate)
  let resultDate: boolean = false
  if(startNum > endNum) {
    resultDate = true
  }
  return resultDate
}

export const isBetween = (isDate: IsDate, startDate: IsDate, endDate: IsDate, modeDate: string = 'dateTime'): boolean => {
  const isNum: number = modeDateHelper(isDate, modeDate)
  const startNum: number = modeDateHelper(startDate, modeDate)
  const endNum: number = modeDateHelper(endDate, modeDate)
  let resultDate: boolean = false
  if(isNum >= startNum && isNum <= endNum) {
    resultDate = true
  }
  return resultDate
}
