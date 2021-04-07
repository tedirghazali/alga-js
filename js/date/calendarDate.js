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
  const beforeMonth = daysInMonth(yearArg, Number(Number(monthArg) - 1))
  const sliceBeforeMonth = (Number(currentMonth.start) !== 0) ? beforeMonth.value.slice(Number('-'+currentMonth.start)) : []
  const afterMonth = daysInMonth(yearArg, Number(Number(monthArg) + 1))
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
  const beforeMonth = daysInUTCMonth(yearArg, Number(Number(monthArg) - 1))
  const sliceBeforeMonth = (Number(currentMonth.start) !== 0) ? beforeMonth.value.slice(Number('-'+currentMonth.start)) : []
  const afterMonth = daysInUTCMonth(yearArg, Number(Number(monthArg) + 1))
  const sliceAfterMonth = (Number(currentMonth.start) !== 6) ? afterMonth.value.slice(0, 6 - Number(currentMonth.end)) : []
  
  return [...dayNames, ...sliceBeforeMonth, ...currentMonth.value, ...sliceAfterMonth]
}

const calendarTime = () => {}

export {
  calendar,
  calendarUTC,
  calendarTime
}
