import * as dateVar from './dateVar.js'
import { daysInMonth, daysInUTCMonth } from './daysInMonth.js'

const calendar = (dateArg1, dateArg2, dayArr = []) => {
  if(!dateArg1) return
  if(!dateArg2) return
  
  const dayNames = (dayArr.length === 7) ? dayArr : dateVar.DAY_NAMES
  const currentMonth = daysInMonth(dateArg1, dateArg2)
  const beforeMonth = daysInMonth(dateArg1, Number(Number(dateArg2) - 1))
  const sliceBeforeMonth = beforeMonth.value.slice(Number('-'+currentMonth.start))
  const afterMonth = daysInMonth(dateArg1, Number(Number(dateArg2) + 1))
  const sliceAfterMonth = afterMonth.value.slice(0, 6 - Number(currentMonth.end))
  
  return [...dayNames, ...sliceBeforeMonth, ...currentMonth.value, ...sliceAfterMonth]
}

const calendarUTC = (dateArg1, dateArg2, dayArr = []) => {
  if(!dateArg1) return
  if(!dateArg2) return
  
  const dayNames = (dayArr.length === 7) ? dayArr : dateVar.DAY_NAMES
  const currentMonth = daysInUTCMonth(dateArg1, dateArg2)
  const beforeMonth = daysInUTCMonth(dateArg1, Number(Number(dateArg2) - 1))
  const sliceBeforeMonth = beforeMonth.value.slice(Number('-'+currentMonth.start))
  const afterMonth = daysInUTCMonth(dateArg1, Number(Number(dateArg2) + 1))
  const sliceAfterMonth = afterMonth.value.slice(0, 6 - Number(currentMonth.end))
  
  return [...dayNames, ...sliceBeforeMonth, ...currentMonth.value, ...sliceAfterMonth]
}

const calendarTime = () => {}

export {
  calendar,
  calendarUTC,
  calendarTime
}
