// ambil pengecekan
import { isYear, isMonth, isDate, isLeapYear, isFormatDate } from './isDate.js'
import { isNumber } from '../number/isNumber.js'
// ambil semua pesannya
import msgDate from './msgDate.js'
import { daysInMonth, daysInYear, daysInBetween } from './dayDate.js'
import { format } from './formatDate.js'
import { addDate } from './addDate.js'
import { subtractDate } from './subtractDate.js'
import { rangeDate } from './rangeDate.js'

export const week = (yearParams, monthParams, dateParams) => {
  // pengecekan tahun, bulan, dan tangal dan untuk pesan saya pisahkan pada berkas lain
  if(!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthParams)) {
    throw new Error(msgDate.monthMsg)
  }
  if(!isDate(dateParams)) {
    throw new Error(msgDate.dateMsg)
  }
  // hitung jumlah hari yang telah dilalui dalam tahun ini
  const calcCurrentDays = daysInBetween(new Date(Number(yearParams), 0, 1), new Date(Number(yearParams), Number(monthParams) - 1, Number(dateParams)))
  // kurangi hari yang tidak dimulai dari hari ahad
  const getFirstDay = Number(new Date(yearParams, 0, 1).getDay())
  let subtractDay = 0
  if(getFirstDay > 0) {
    subtractDay = 6 - (getFirstDay - 1)
  }
  // perlu penambahan jika tidak berakhir hari sabtu
  const getLastDay = Number(new Date(Number(yearParams), Number(monthParams) - 1, Number(dateParams)).getDay())
  let addDay = 0
  if(getLastDay < 6) {
    addDay = 6 - getLastDay
  }
  return Math.ceil(((Number(calcCurrentDays) + addDay) - subtractDay) / 7)
}

export const weeks = (yearParam, weekParam, formatParam) => {
  if(!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isNumber(weekParam)) {
    throw new Error('You have to enter a number')
  }
  if(!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly')
  }
  // cek taggal dari nomor pekan
  const getWeekDate = weeksInYear(yearParam, 'YYYY-MM-DD')[weekParam.toString()]
  // pecahkan tanggal menjadi bagian-bagian yang terpisah
  const splitFirstDate = getWeekDate[0].split('-')
  const splitLastDate = getWeekDate[1].split('-')
  // rangekan tanggal
  const rangeWeekDate = rangeDate(
    new Date(Number(splitFirstDate[0]), Number(splitFirstDate[1]) - 1, Number(splitFirstDate[2])), 
    new Date(Number(splitLastDate[0]), Number(splitLastDate[1]) - 1, Number(splitLastDate[2]))
  , formatParam)
  // 7 tanggal dalam satu array
  return rangeWeekDate
}

export const weeksInMonth = (yearParam, monthParam) => {
  if(!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthParam)) {
    throw new Error(msgDate.monthMsg)
  }
  
  // cek bulan dari semua nilai pekan dalam setahun
  const getWeekNumbers = weeksInYear(yearParam, 'M')
  const resWeeks = []
  for(let [key, val] of Object.entries(getWeekNumbers)) {
    if(val.includes(monthParam.toString())) {
      resWeeks.push(key)
    }
  }
  return (Number(monthParam) === 1) ? resWeeks.filter(w => w !== '52') : resWeeks
}

export const weeksInYear = (yearParams, formatDate = 'DD') => {
  if(!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isFormatDate(formatDate)) {
    throw new Error('Please enter the correct date format in a string type')
  }
  // cek posisi dari tanggal dan bulan pertama
  const getFirstDay = Number(new Date(Number(yearParams), 0, 1).getDay())
  let subtractDay = 0
  if(getFirstDay > 0) {
    subtractDay = 6 - (getFirstDay - 1)
  }
  // cek posisi dari tanggal dan bulan terakhir
  const getLastDay = Number(new Date(Number(yearParams), 11, 31).getDay())
  let addDay = 0
  if(getLastDay < 6) {
    addDay = 6 - getLastDay
  }
  // hitung jumlah pekan dalam satu tahun
  const totalWeeks = Math.ceil(((Number(daysInYear(yearParams)) + addDay) - subtractDay) / 7)
  // ini akan menghasilkan object dengan angka setiap pekan sebagai property key dan tanggal mulai dan akhir dari sepekan dalam array
  const objWeek = {}
  let startDay = subtractDay + 1
  let startMonth = 0
  let startYear = yearParams
  for(let i = 1; i <= totalWeeks;i++) {
    objWeek[i.toString()] = [
      format(new Date(startYear, startMonth, startDay), formatDate),
      format(addDate(new Date(startYear, startMonth, startDay), 6), formatDate)
    ]
    startDay = startDay + 7
    if(startMonth < 12 && startDay > Number(daysInMonth(yearParams, startMonth + 1))) {
      startDay = startDay - Number(daysInMonth(yearParams, startMonth + 1))
      if(startMonth !== 11) {
        startMonth = startMonth + 1
      } else {
        startMonth = 1
        startYear = startYear + 1
      }
    }
  }
  return objWeek
}
