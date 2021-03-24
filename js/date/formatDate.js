import * as dateVar from './dateVar.js'

const format = (dateStr, formatStr = undefined) => {
  if(typeof dateStr !== 'string') return
  
  //const oriDate = new Date(dateStr)
  let newDate = (typeof formatStr === 'string') ? formatStr : dateVar.DEFAULT_DATE_FORMAT
  /*const tokens = {
    YY: () => {
      const shortYear = oriDate.getFullYear().toString().slice(-2)
      let dateYear = oriDate.getFullYear()
      if(shortYear !== "00") {
        dateYear = Number(shortYear)
      }
      return dateYear
    },
    YYYY: oriDate.getFullYear(),
    M: Number(oriDate.getMonth() + 1),
    MM: () => {
      const dateMonth = Number(oriDate.getMonth() + 1).toString()
      if(dateMonth.length === 1) {
        const addZero = "0" + dateMonth
        return addZero
      } else {
        return dateMonth
      }
    },
    m: dateVar.MONTH_NAMES[oriDate.getMonth()].slice(0, 3),
    mm: dateVar.MONTH_NAMES[oriDate.getMonth()],
    D: oriDate.getDate(),
    DD: () => {
      const dateDay = oriDate.getDate.toString()
      if(dateDay.length === 1) {
        const addDayZero = "0" + dateDay
        return addDayZero
      } else {
        return dateDay
      }
    },
    d: dateVar.DAY_NAMES[oriDate.getDay()].slice(0, 3),
    dd: dateVar.DAY_NAMES[oriDate.getDay()],
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
    k: Number(oriDate.getHours() + 1),
    kk: () => {
      const dateHour4 = Number(oriDate.getHours() + 1).toString()
      if(dateHour4.length === 1) {
        const addHour4Zero = "0" + dateHour4
        return addHour4Zero
      } else {
        return dateHour4
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
  }*/
  
  return newDate.replace(/Y{1,4}/g, 'saya')
}

export {
  format
}
