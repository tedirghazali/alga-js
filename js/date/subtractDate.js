import { isFullDate, isFormatDate } from './isDate.js'
import { format } from './formatDate.js'
import { daysInMonth } from './dayDate.js'
import { isNumber } from '../number/isNumber.js'

export const subtractDate = (dateParam, subtractNum, formatParam = null) => {
  if(!isFullDate(dateParam)) {
    throw new Error('Please enter a date in correct way, either in string or array type')
  }
  if(!isNumber(subtractNum)) {
    throw new Error('Only accept number type on second argument')
  }
  
  let newDate = new Date(dateParam)
  // kurangi tanggal
  const subtractNewDate = Number(newDate.getDate()) - Number(subtractNum)
  // pastikan tanggal tidak melewati jumlah tanggal pada bulan tertentu
  const allDays = Number(daysInMonth(Number(newDate.getFullYear()), newDate.getMonth()))
  if(subtractNewDate < 1) {
    const restNewDate = allDays + (subtractNewDate - 1)
    // pastikan juga bulannya tidak bulan 1, kalau ya berati masuk tahun lama
    if(Number(newDate.getMonth()) === 0) {
      newDate = new Date(Number(newDate.getFullYear()) - 1, 0, restNewDate)
    } else {
      newDate = new Date(Number(newDate.getFullYear()), Number(newDate.getMonth()) + 1, restNewDate)
    }
  } else {
    newDate = new Date(Number(newDate.getFullYear()), Number(newDate.getMonth()), subtractNewDate)
  }
  // cek dan buat formatnya
  const formatDate = (formatParam !== null && isFormatDate(formatParam) !== false) ? format(newDate, formatParam) : newDate
  return formatDate
}
