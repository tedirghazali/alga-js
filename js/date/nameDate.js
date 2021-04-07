export const monthName = (locale = 'en-US', monthType = 'long', monthNum = null) => {
  let arrMonthName = []
  if(typeof monthNum === 'number' && monthNum >= 0 && monthNum <= 11) {
    const thisDate = new Date(Date.UTC(2021, monthNum))
    arrMonthName = new Intl.DateTimeFormat(locale, { month: monthType }).format(thisDate)
  } else {
    for(let i = 0; i <= 11; i++) {
      const thisDate = new Date(Date.UTC(2021, i))
      arrMonthName.push(new Intl.DateTimeFormat(locale, { month: monthType }).format(thisDate))
    }
  }
  return arrMonthName
}

export const dayName = (locale = 'en-US', dayType = 'long', yearNum = 2021, monthNum = 1, dayNum = null) => {
  let arrDayName = []
  if(typeof dayNum === 'number' && dayNum >= 1 && dayNum <= 31) {
    const thisDate = new Date(Date.UTC(yearNum, Number(monthNum) - 1, dayNum))
    arrDayName = new Intl.DateTimeFormat(locale, { weekday: dayType }).format(thisDate)
  } else {
    for(let i = 4; i <= 10; i++) {
      const thisDate = new Date(Date.UTC(2021, 3, i))
      arrDayName.push(new Intl.DateTimeFormat(locale, { weekday: dayType }).format(thisDate))
    }
  }
  return arrDayName
}
