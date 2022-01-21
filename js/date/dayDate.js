// ambil pengecekan
import { isYear, isMonth, isDate, isLeapYear, isFullDate } from './isDate.js'
// ambil semua pesannya
import msgDate from './msgDate.js'

// fungsi ini tujuannya untuk menghasilkan hari (namanya)
export const day = (yearParams, monthParams = 1, dateParams = 1, locale = 'en-US', dayType = 'long') => {
  // pengecekan tahun, bulan, dan tangal, saya pisahkan dengan pesannya pada berkas lain
  if(!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthParams)) {
    throw new Error(msgDate.monthMsg)
  }
  if(!isDate(dateParams)) {
    throw new Error(msgDate.dateMsg)
  }
  // disini kita ingin mendapatkan tanggal secara lokal
  const localDate = new Date(Date.UTC(Number(yearParams), Number(monthParams) - 1, Number(dateParams)))
  // kemudian kita ubah menjadi nama hari
  return new Intl.DateTimeFormat(locale, { weekday: dayType }).format(localDate)
}
// this will generate all weekday names in a new array
export const days = (locale = 'en-US', dayType = 'long') => {
  let daysArr = []
  // the month of august is start on Sunday, 1
  for(let i = 1; i <= 7; i++) {
    const localDate = new Date(Date.UTC(2021, 7, i))
    daysArr.push(new Intl.DateTimeFormat(locale, { weekday: dayType }).format(localDate))
  }
  return daysArr
}

export const daysInMonth = (yearParams, monthParams = 1) => {
  if(!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthParams)) {
    throw new Error(msgDate.monthMsg)
  }
  // the common days in a month either 28 or 29 in february, 30 or 31 in other months
  const commonDays = [28, 29, 30, 31]
  // take the last day of the previous month
  const numOfDays = new Date(Date.UTC(Number(yearParams), Number(monthParams), 0)).getUTCDate()
  // and make sure the days not below 28 or above 31
  return (commonDays.includes(numOfDays)) ? numOfDays : 31
}

export const daysInPrevMonth = (yearParams, monthParams = 1) => {
  if(!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthParams)) {
    throw new Error(msgDate.monthMsg)
  }
  const prevDays = []
  const getDay = new Date(Date.UTC(yearParams, Number(monthParams) - 1, 1)).getUTCDay()
  for(let i = Number(getDay) - 1; i >= 0; i--) {
    prevDays.push(new Date(Date.UTC(yearParams, Number(monthParams) - 1, Number('-'+i))).getUTCDate())
  }
  return prevDays
}
  
export const daysInNextMonth = (yearParams, monthParams = 1) => {
  if(!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg)
  }
  if(!isMonth(monthParams)) {
    throw new Error(msgDate.monthMsg)
  }
  const getDay = new Date(Date.UTC(yearParams, Number(monthParams) - 1, daysInMonth(yearParams, monthParams))).getUTCDay()
  return (6 - Number(getDay)) + 7
}
  
export const daysInYear = (yearParams) => {
  if(!isYear(yearParams)) {
    throw new Error(msgDate.yearMsg)
  }
  // jumlah hari dalam setahun
  return (isLeapYear(yearParams)) ? 366 : 365
}

export const daysInBetween = (firstDate, lastDate) => {
  if(!isFullDate(firstDate)) {
    throw new Error('Error in the first argument: '+msgDate.fullDateMsg)
  }
  if(!isFullDate(lastDate)) {
    throw new Error('Error in the second argument: '+msgDate.fullDateMsg)
  }
  const startDate = new Date(firstDate)
  const endDate = new Date(lastDate)
  // hitung perbedaan waktu
  const timeDifference = Number(endDate.getTime()) - Number(startDate.getTime())
  // hasilnya dapat dibagi dari perbedaan waktu dengan jumlah semua milisekon
  return timeDifference / (1000 * 60 * 60 * 24)
}
