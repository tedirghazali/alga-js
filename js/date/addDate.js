import { isFullDate, isFormatDate } from './isDate.js'
import { format } from './formatDate.js'
import { daysInMonth } from './dayDate.js'
import { isNumber } from '../number/isNumber.js'

export const addDate = (dateParam, addNum, formatParam = null) => {
  if(!isFullDate(dateParam)) {
    throw new Error('Please enter a date in correct way, either in string or array type')
  }
  if(!isNumber(addNum)) {
    throw new Error('Only accept number type on second argument')
  }
  
  let newDate = new Date(dateParam)
  // tambah hari atau tanggal
  const addNewDate = Number(newDate.getDate()) + Number(addNum)
  // pastikan tanggal tidak melewati jumlah tanggal pada bulan tertentu
  const allDays = Number(daysInMonth(Number(newDate.getFullYear()), newDate.getMonth() + 1))
  if(addNewDate > allDays) {
    const restNewDate = addNewDate - allDays
    // pastikan juga bulannya tidak bulan 12, kalau ya berati masuk tahun baru
    if(Number(newDate.getMonth()) === 11) {
      newDate = new Date(Number(newDate.getFullYear()) + 1, 0, restNewDate)
    } else {
      newDate = new Date(Number(newDate.getFullYear()), Number(newDate.getMonth()) + 1, restNewDate)
    }
  } else {
    newDate = new Date(Number(newDate.getFullYear()), Number(newDate.getMonth()), addNewDate)
  }
  // cek format
  const formatDate = (formatParam !== null && isFormatDate(formatParam) !== false) ? format(newDate, formatParam) : newDate
  return formatDate
}
