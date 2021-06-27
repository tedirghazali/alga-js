//import * as dateVar from './dateVar.js'
import { isFullDate, isFormatDate } from './isDate.js'
import { days } from './dayDate.js'
import { months } from './monthDate.js'

export const format = (dateParam, formatStr, locale = 'en-US', dayType = 'long') => {
  if(!isFullDate(dateParam)) {
    throw new Error('You\'re entering the wrong date string, please use this statement "new Date(\'yourdateParam\').toString()" instead or array "[year, monthIndex, dateNumber]"')
  }
  if(!isFormatDate(formatStr)) {
    throw new Error('Please enter the correct date format')
  }
  
  const oriDate = new Date(dateParam)
  const formatDate = formatStr
  let newDate = formatStr
  
  const tokens = {
    YY: () => {
      const shortYear = oriDate.getFullYear().toString().slice(-2)
      let dateYear = oriDate.getFullYear()
      if(shortYear !== "00") {
        dateYear = Number(shortYear)
      }
      return dateYear
    },
    YYYY: oriDate.getFullYear(),
    M: Number(oriDate.getMonth()) + 1,
    MM: () => {
      const dateMonth = Number(Number(oriDate.getMonth()) + 1).toString()
      if(dateMonth.length === 1) {
        const addZero = "0" + dateMonth
        return addZero
      } else {
        return dateMonth
      }
    },
    m: months(locale, dayType)[oriDate.getMonth()].slice(0, 3),
    mm: months(locale, dayType)[oriDate.getMonth()],
    D: oriDate.getDate,
    DD: () => {
      const dateDay = oriDate.getDate().toString()
      let resDay = dateDay
      if(dateDay.length === 1) {
        const addDayZero = "0" + dateDay
        resDay = addDayZero
      }
      return resDay
    },
    d: days(locale, dayType)[oriDate.getDay()].slice(0, 3),
    dd: days(locale, dayType)[oriDate.getDay()],
    H: oriDate.getHours(),
    HH: () => {
      const dateHour = oriDate.getHours().toString()
      if(dateHour.length === 1) {
        const addHourZero = "0" + dateHour
        return addHourZero
      } else {
        return dateHour
      }
    },
    h: () => {
      let dateHour2 = Number(oriDate.getHours() + 1)
      let resetDateHour2 = dateHour2
      if(dateHour2  > 12) {
        resetDateHour2 = dateHour2 - (dateHour2 - 1)
      }
      return resetDateHour2
    },
    hh: () => {
      let dateHour2 = Number(oriDate.getHours() + 1)
      let resetDateHour2 = dateHour2
      if(dateHour2  > 12) {
        resetDateHour2 = dateHour2 - (dateHour2 - 1)
      }
      const dateHour3 = resetDateHour2.toString()
      if(dateHour3.length === 1) {
        const addHour3Zero = "0" + dateHour3
        return addHour3Zero
      } else {
        return dateHour3
      }
    },
    k: () => (Number(oriDate.getHours()) === 0) ? 24 : oriDate.getHours(),
    kk: () => {
      const dateHour4 = Number(oriDate.getHours()).toString()
      if(dateHour4.length === 1) {
        const addHour4Zero = "0" + dateHour4
        return (Number(addHour4Zero) === 0) ? 24 : addHour4Zero
      } else {
        return (Number(dateHour4) === 0) ? 24 : dateHour4
      }
    },
    i: oriDate.getMinutes(),
    ii: () => {
      const dateMinute = oriDate.getMinutes().toString()
      if(dateMinute.length === 1) {
        const addMinuteZero = "0" + dateMinute
        return addMinuteZero
      } else {
        return dateMinute
      }
    },
    s: oriDate.getSeconds(),
    ss: () => {
      const dateSecond = oriDate.getSeconds().toString()
      if(dateSecond.length === 1) {
        const addSecondZero = "0" + dateSecond
        return addSecondZero
      } else {
        return dateSecond
      }
    },
    A: oriDate.getHours() < 12 ? 'AM' : 'PM',
    a: oriDate.getHours() < 12 ? 'am' : 'pm',
    Do: oriDate.getDate().toString() + 'st'
  }
  
  const splitFormat = formatDate.split(/-|\/|\.|:|\s/)
  for(let sf of splitFormat) { 
    if('YY' === sf) {
      newDate = newDate.replace(sf, tokens.YY())
    } else if('YYYY' === sf) {
      newDate = newDate.replace(sf, tokens.YYYY)
    } else if('M' === sf) {
      newDate = newDate.replace(sf, tokens.M)
    } else if('MM' === sf) {
      newDate = newDate.replace(sf, tokens.MM())
    } else if('m' === sf) {
      newDate = newDate.replace(sf, tokens.m)
    } else if('mm' === sf) {
      newDate = newDate.replace(sf, tokens.mm)
    } else if('D' === sf) {
      newDate = newDate.replace(sf, tokens.D)
    } else if('DD' === sf) {
      newDate = newDate.replace(sf, tokens.DD())
    } else if('d' === sf) {
      newDate = newDate.replace(sf, tokens.d)
    } else if('dd' === sf) {
      newDate = newDate.replace(sf, tokens.dd)
    } else if('H' === sf) {
      newDate = newDate.replace(sf, tokens.H)
    } else if('HH' === sf) {
      newDate = newDate.replace(sf, tokens.HH())
    } else if('h' === sf) {
      newDate = newDate.replace(sf, tokens.h())
    } else if('hh' === sf) {
      newDate = newDate.replace(sf, tokens.hh())
    } else if('k' === sf) {
      newDate = newDate.replace(sf, tokens.k())
    } else if('kk' === sf) {
      newDate = newDate.replace(sf, tokens.kk())
    } else if('i' === sf) {
      newDate = newDate.replace(sf, tokens.i)
    } else if('ii' === sf) {
      newDate = newDate.replace(sf, tokens.ii())
    } else if('s' === sf) {
      newDate = newDate.replace(sf, tokens.s)
    } else if('ss' === sf) {
      newDate = newDate.replace(sf, tokens.ss())
    } else if('A' === sf) {
      newDate = newDate.replace(sf, tokens.A)
    } else if('a' === sf) {
      newDate = newDate.replace(sf, tokens.a)
    } else if('Do' === sf) {
      newDate = newDate.replace(sf, tokens.Do)
    }
  }
  
  return newDate
}
