// ambil regex untuk cek tanggal
import * as dateVar from './dateVar.js'
// pengecekan tahun mulai dari tipenya sampai jumlahnya
export const isYear = (yearParams) => {
  return (typeof yearParams === 'number' || typeof yearParams === 'string') ? true : false
}
// pengecekan bulan mulai dari tipenya sampai jumlahnya
export const isMonth = (monthParams) => {
  return (typeof monthParams === 'number' || typeof monthParams === 'string') ? true : false
}
// pengecekan tanggal dan hasilnya selalu dalam tipe boolean (true atau false)
export const isDate = (dateParams) => {
  return (typeof dateParams === 'number' || typeof dateParams === 'string') ? true : false
}
// pengecekan tanggal, bulan dan tahun sekaligus
export const isFullDate = (dateParams) => {
  return ((typeof new Date(dateParams) === 'object' && dateParams !== null) || (typeof dateParams === 'string' && new RegExp(dateVar.REGEX_PARSE_DATE).test(dateParams))) ? true : false
}

export const isFormatDate = (formatParams) => {
  return (typeof formatParams === 'string' && new RegExp(dateVar.REGEX_DATE_FORMAT).test(formatParams)) ? true : false
}

// cek tahun kabisat (leap year)
export const isLeapYear = (yearParams) => {
  return (yearParams % 400 === 0 || (yearParams % 100 !== 0 && yearParams % 4 === 0)) ? true : false;
}
