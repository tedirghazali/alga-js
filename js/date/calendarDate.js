//import * as dateVar from './dateVar.js'
import { daysInMonth, daysInUTCMonth } from './daysInMonth.js'
import { dayName } from './nameDate.js'

const calendar = (yearArg, monthArg, dayNameIn = 'en-US') => {
  if(typeof yearArg !== 'string' && typeof yearArg !== 'number') {
    throw new Error('Only accept year numbers here, also support string type')
  }
  if(typeof monthArg !== 'string' && typeof monthArg !== 'number') {
    throw new Error('For month, only accept number and string type')
  }
  
  const dayNames = dayName(dayNameIn)
  const currentMonth = daysInMonth(yearArg, monthArg)
  const beforeMonth = (Number(Number(monthArg) - 1) < 1) ? daysInMonth(Number(yearArg - 1), 12) : daysInMonth(yearArg, Number(Number(monthArg) - 1))
  const sliceBeforeMonth = (Number(currentMonth.start) !== 0) ? beforeMonth.value.slice(Number('-'+currentMonth.start)) : []
  const afterMonth = (Number(Number(monthArg) + 1) > 12) ? daysInMonth(Number(yearArg + 1), 1) : daysInMonth(yearArg, Number(Number(monthArg) + 1))
  const sliceAfterMonth = (Number(currentMonth.start) !== 6) ? afterMonth.value.slice(0, 6 - Number(currentMonth.end)) : []
  
  return [...dayNames, ...sliceBeforeMonth, ...currentMonth.value, ...sliceAfterMonth]
}

const calendarUTC = (yearArg, monthArg, dayNameIn = 'en-US') => {
  if(typeof yearArg !== 'string' && typeof yearArg !== 'number') {
    throw new Error('Only accept year numbers here, also support string type')
  }
  if(typeof monthArg !== 'string' && typeof monthArg !== 'number') {
    throw new Error('For month, only accept number and string type')
  }
  
  const dayNames = dayName(dayNameIn)
  const currentMonth = daysInUTCMonth(yearArg, monthArg)
  const beforeMonth = (Number(Number(monthArg) - 1) < 1) ? daysInUTCMonth(Number(yearArg - 1), 12) : daysInUTCMonth(yearArg, Number(Number(monthArg) - 1))
  const sliceBeforeMonth = (Number(currentMonth.start) !== 0) ? beforeMonth.value.slice(Number('-'+currentMonth.start)) : []
  const afterMonth = (Number(Number(monthArg) + 1) >= 12) ? daysInUTCMonth(Number(yearArg + 1), 1) : daysInUTCMonth(yearArg, Number(Number(monthArg) + 1))
  const sliceAfterMonth = (Number(currentMonth.start) !== 6) ? afterMonth.value.slice(0, 6 - Number(currentMonth.end)) : []
  
  return [...dayNames, ...sliceBeforeMonth, ...currentMonth.value, ...sliceAfterMonth]
}

export {
  calendar,
  calendarUTC
}
