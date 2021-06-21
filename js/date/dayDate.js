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
// fungsi ini untuk mendapatkan semua nama hari dalam tipe array
export const days = (locale = 'en-US', dayType = 'long') => {
  let daysArr = []
  // melakukan iterasi dari tanggal 4 sampai 10 April 2021, kemudian kita isi nama harinya kedalam array
  for(let i = 4; i <= 10; i++) {
    const localDate = new Date(Date.UTC(2021, 3, i))
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
  // jumlah hari (rata-rata) dari setiap bulan
  const commonDays = [28, 29, 30, 31]
  // ambil hari ini (angka)
  const numOfDays = new Date(Date.UTC(Number(yearParams), Number(monthParams), 0)).getUTCDate()
  // kemudian saring atau cek apakah angkanya sesuai dari jumlah hari diatas, jika tidak maka hasilnya 31
  return (commonDays.includes(numOfDays)) ? numOfDays : 31
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
