// ambil pengecekan
import { isYear, isMonth, isDate, isFormatDate } from './isDate.js'
import { isNumber } from '../number/isNumber.js'
// ambil semua pesannya
import msgDate from './msgDate.js'
import { daysInMonth, daysInYear, daysInBetween } from './dayDate.js'
import { format } from './formatDate.js'
import { addDate } from './addDate.js'
//import { rangeDate } from './rangeDate.js'

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

export const weeks = (yearParam, weekParam, formatParam = 'YYYY-MM-DD') => {
  if(!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isNumber(weekParam)) {
    throw new Error('You have to enter a number')
  }
  if(!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly')
  }
  // pengecekan posisi dari tanggal dan bulan pertama
  const getFirstDay = Number(new Date(Number(yearParam), 0, 1).getDay())
  let subtractDay = 0
  if(getFirstDay > 0) {
    subtractDay = 6 - (getFirstDay - 1)
  }
  // ini akan menghasilkan object dengan angka setiap pekan sebagai property key dan tanggal mulai dan akhir dari sepekan dalam array
  const arrWeek = []
  let startDay = subtractDay + 1
  let startMonth = 0
  let startYear = yearParam
  for(let i = 1; i <= Number(weekParam);i++) {
    if(i === Number(weekParam)) {
      arrWeek.push(format(new Date(startYear, startMonth, startDay), formatParam))
      let j = 0
      while(j < 6) {
        j++
        arrWeek.push(format(addDate(new Date(startYear, startMonth, startDay), j), formatParam))
      }
    }
    startDay = startDay + 7
    if(startMonth < 12 && startDay > Number(daysInMonth(yearParam, startMonth + 1))) {
      startDay = startDay - Number(daysInMonth(yearParam, startMonth + 1))
      if(startMonth !== 11) {
        startMonth = startMonth + 1
      } else {
        startMonth = 1
        startYear = startYear + 1
      }
    }
  }
  return arrWeek
}

export const weeksInMonth = (yearParam, monthParam) => {
  if(!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthParam)) {
    throw new Error(msgDate.monthMsg)
  }
  
  // cek bulan dari semua nilai pekan dalam setahun
  const getWeekNumbers = weeksOfYear(yearParam, 52, 'M')
  const resWeeks = []
  for(let [key, val] of Object.entries(getWeekNumbers)) {
    if(val.includes(monthParam.toString())) {
      resWeeks.push(key)
    }
  }
  return (Number(monthParam) === 1) ? resWeeks.filter(w => w !== '52') : resWeeks
}

export const weeksInYear = (yearParams) => {
  if(!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg)
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
  
  return totalWeeks
}

export const weeksOfYear = (yearParam, weekParam, formatParam = 'YYYY-MM-DD') => {
  if(!isYear(yearParam)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isNumber(weekParam)) {
    throw new Error('You have to enter a number')
  }
  if(!isFormatDate(formatParam)) {
    throw new Error('Please enter a format of date correctly')
  }
  // pengecekan posisi dari tanggal dan bulan pertama
  const getFirstDay = Number(new Date(Number(yearParam), 0, 1).getDay())
  let subtractDay = 0
  if(getFirstDay > 0) {
    subtractDay = 6 - (getFirstDay - 1)
  }
  // ini akan menghasilkan object dengan angka setiap pekan sebagai property key dan tanggal mulai dan akhir dari sepekan dalam array
  const objWeek = {}
  let startDay = subtractDay + 1
  let startMonth = 0
  let startYear = yearParam
  for(let i = 1; i <= weekParam;i++) {
    objWeek[i.toString()] = [
      format(new Date(startYear, startMonth, startDay), formatParam),
      format(addDate(new Date(startYear, startMonth, startDay), 6), formatParam)
    ]
    startDay = startDay + 7
    if(startMonth < 12 && startDay > Number(daysInMonth(yearParam, startMonth + 1))) {
      startDay = startDay - Number(daysInMonth(yearParam, startMonth + 1))
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
