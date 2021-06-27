import { isYear, isMonth, isDate, isFormatDate } from './isDate.js'
import msgDate from './msgDate.js'
import { days, daysInMonth } from './dayDate.js'
import { week, weeks, weeksInMonth } from './weekDate.js'
import { rangeDate } from './rangeDate.js'
import { zip } from '../array/zipArray.js'

export const calendar = (yearArg, monthArg, flatParam = true, formatParam = 'YYYY-MM-DD', locale = 'en-US') => {
  if(!isYear(yearArg)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthArg)) {
    throw new Error(msgDate.monthMsg)
  }
  if(!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly')
  }
  // ambil nama-nama hari
  const dayNames = days(locale)
  // rangekan dan hasilkan semua tanggal
  const currentMonth = rangeDate(
    new Date(yearArg, Number(monthArg) - 1, 1), 
    new Date(yearArg, Number(monthArg) - 1, daysInMonth(yearArg, monthArg))
  , formatParam)
   // cek hari pertama, kurangi hari yang tidak dimulai dari hari ahad
  const getFirstDay = Number(new Date(yearArg, Number(monthArg) - 1, 1).getDay())
  let prevMonth = []
  if(getFirstDay > 0) {
    const subtractPrevDay = getFirstDay - 1
    prevMonth = rangeDate(
      new Date(yearArg, Number(monthArg) - 2, Number(daysInMonth(yearArg, Number(monthArg) - 1)) - subtractPrevDay), 
      new Date(yearArg, Number(monthArg) - 2, daysInMonth(yearArg, Number(monthArg) - 1))
    , formatParam)
  }
  
  // cek hari terakhir, perlu penambahan jika tidak berakhir hari sabtu
  const getLastDay = Number(new Date(yearArg, Number(monthArg) - 1, daysInMonth(yearArg, monthArg)).getDay())
  let nextMonth = []
  if(getLastDay < 6) {
    let addNextDay = 6 - (getLastDay + 1)
    nextMonth = rangeDate(
      new Date(yearArg, Number(monthArg), 1), 
      new Date(yearArg, Number(monthArg), 1 + addNextDay)
    , formatParam)
  }
  
  const newMonth = [dayNames, prevMonth, currentMonth, nextMonth]
  return (flatParam === true) ? newMonth.flat() : newMonth
}

export const daysInCalendar = (yearArg, monthArg, formatParam = 'YYYY-MM-DD') => {
  if(!isYear(yearArg)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthArg)) {
    throw new Error(msgDate.monthMsg)
  }
  if(!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly')
  }
  // rangekan dan hasilkan semua tanggal untuk bulan ini
  return rangeDate(
    new Date(yearArg, Number(monthArg) - 1, 1), 
    new Date(yearArg, Number(monthArg) - 1, daysInMonth(yearArg, monthArg))
  , formatParam)
}

export const prevDaysInCalendar = (yearArg, monthArg, formatParam = 'YYYY-MM-DD') => {
  if(!isYear(yearArg)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthArg)) {
    throw new Error(msgDate.monthMsg)
  }
  if(!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly')
  }
  // cek hari pertama, kurangi hari yang tidak dimulai dari hari ahad
  const getFirstDay = Number(new Date(yearArg, Number(monthArg) - 1, 1).getDay())
  let restPrevMonth = []
  if(getFirstDay > 0) {
    const subtractPrevDay = getFirstDay - 1
    restPrevMonth = rangeDate(
      new Date(yearArg, Number(monthArg) - 2, Number(daysInMonth(yearArg, Number(monthArg) - 1)) - subtractPrevDay), 
      new Date(yearArg, Number(monthArg) - 2, daysInMonth(yearArg, Number(monthArg) - 1))
    , formatParam)
  }
  
  return restPrevMonth
}

export const nextDaysInCalendar = (yearArg, monthArg, formatParam = 'YYYY-MM-DD') => {
  if(!isYear(yearArg)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthArg)) {
    throw new Error(msgDate.monthMsg)
  }
  if(!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly')
  }
  // cek hari terakhir, perlu penambahan jika tidak berakhir hari sabtu
  const getLastDay = Number(new Date(yearArg, Number(monthArg) - 1, daysInMonth(yearArg, monthArg)).getDay())
  let restNextMonth = []
  if(getLastDay < 6) {
    let addNextDay = 6 - (getLastDay + 1)
    restNextMonth = rangeDate(
      new Date(yearArg, Number(monthArg), 1), 
      new Date(yearArg, Number(monthArg), 1 + addNextDay)
    , formatParam)
  }
  
  return restNextMonth
}

export const weeklyCalendar = (yearParam, monthParam, dateParam, formatParam = 'YYYY-MM-DD', locale = 'en-US') => {
  if(!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthParam)) {
    throw new Error(msgDate.monthMsg)
  }
  if(!isDate(dateParam)) {
    throw new Error(msgDate.dateMsg)
  }
  if(!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly')
  }
  
  const dayNames = days(locale)
  const weekNumbers = week(yearParam, monthParam, dateParam)
  const weekDates = weeks(yearParam, weekNumbers, formatParam)
  return zip(dayNames, weekDates)[0]
}

export const calendarWithWeeks = (yearArg, monthArg, flatParam = true, formatParam = 'YYYY-MM-DD', locale = 'en-US') => {
  if(!isYear(yearArg)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthArg)) {
    throw new Error(msgDate.monthMsg)
  }
  if(!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly')
  }
  // ambil nama-nama hari
  const dayNames = days(locale)
  // ambil nomor pekan saja dari bulan ini
  const weekNumbers = weeksInMonth(yearArg, monthArg)
  const currentMonth = []
  if(Number(new Date(yearArg, Number(monthArg) - 1, 1).getDay()) !== 0 && Number(monthArg) === 1) {
    currentMonth.push('52')
    currentMonth.push(weeks(Number(yearArg) - 1, 52, formatParam))
  }
  for(let wn of weekNumbers) {
    currentMonth.push(wn)
    currentMonth.push(weeks(yearArg, wn, formatParam))
  }
  
  const newMonth = ['Week', dayNames, ...currentMonth]
  return (flatParam === true) ? newMonth.flat() : newMonth
}

