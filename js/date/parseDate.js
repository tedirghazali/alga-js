//import * as dateVar from './dateVar.js'
//import { days } from './dayDate.js'
import { months } from './monthDate.js'
import { isFullDate, isFormatDate } from './isDate.js'

export const parse = (dateStr, formatStr, locale = 'en-US', dayType = 'long') => {
  if(!isFullDate(dateStr)) {
    throw new Error('On the first argument, you have to input only the correct date')
  }
  if(!isFormatDate(formatStr)) {
    throw new Error('For format date, you must always input the correct one by using characters like these: Y, M, m, D, d, H, h, k, i, S, s, A, a or Do')
  }
  
  const dateArr = dateStr.split(/-|\/|\.|:|\s/).filter(dt => dt.length >= 1 && dt !== " ").map(word => word.trim())
  const formatArr = formatStr.split(/-|\/|\.|:|\s/).filter(dt => dt.length >= 1 && dt !== " ").map(word => word.trim())
  let newDate = {
    year: new Date().getFullYear(),
    month: Number(new Date().getMonth()) + 1,
    day: new Date().getDate(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
    millisecond: new Date().getMilliseconds()
  }
  
  if(dateArr.length === formatArr.length) {
    for(let i = 0; i < dateArr.length; i++) {
      if(dateArr[i].length === 4 && isNaN(dateArr[i]) === false && formatArr[i] === 'YYYY') {
        newDate.year = dateArr[i]
      } else if(dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'YY') {
        newDate.year = dateArr[i]
      } else if(dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'M' || formatArr[i] === 'MM') {
        newDate.month = Number(dateArr[i]) - 1
      } else if(dateArr[i].length === 3 && months(locale, dayType).map(mn => mn.slice(0, 3)).includes(dateArr[i]) && formatArr[i] === 'm') {
        newDate.month = months(locale, dayType).map(mn => mn.slice(0, 3)).findIndex(dateArr[i])
      } else if(dateArr[i].length >= 3 && months(locale, dayType).includes(dateArr[i]) && formatArr[i] === 'mm') {
        newDate.month = months(locale, dayType).findIndex(dateArr[i])
      } else if(dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'D' || formatArr[i] === 'DD') {
        newDate.day = dateArr[i]
      } else if(dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'H' || formatArr[i] === 'HH') {
        newDate.hour = dateArr[i]
      } else if(dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'h' || formatArr[i] === 'hh') {
        newDate.hour = (dateArr[i] > 12) ? Number(dateArr[i]) - (Number(dateArr[i]) - 1) : dateArr[i]
      } else if(dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'k' || formatArr[i] === 'kk') {
        newDate.hour = (Number(dateArr[i]) === 24) ? 0 : dateArr[i]
      } else if(dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 'i' || formatArr[i] === 'ii') {
        newDate.minute = dateArr[i]
      } else if(dateArr[i].length === 1 || dateArr[i].length === 2 && isNaN(dateArr[i]) === false && formatArr[i] === 's' || formatArr[i] === 'ss') {
        newDate.second = dateArr[i]
      } else if(dateArr[i].slice(-2) === 'st' || dateArr[i].slice(-2) === 'nd' ||dateArr[i].slice(-2) === 'th' && formatArr[i] === 'Do') {
        newDate.second = Number(dateArr[i].slice(0, -2))
      }
    }
  } else {
    throw new Error('The numbers and the formats must be in place, so when we check the length of both of these arguments then the result will be the same')
  }
  
  return new Date(newDate.year, newDate.month, newDate.day, newDate.hour, newDate.minute, newDate.second, newDate.millisecond).toString()
}
