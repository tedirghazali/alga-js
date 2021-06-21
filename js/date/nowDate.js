import { format } from './formatDate.js'

export const now = (dateFormat = undefined) => {
  let newDate = new Date().toString()
  
  if(typeof dateFormat === 'string') {
    newDate = format(newDate, dateFormat)
  }
  
  return newDate
}

export const nowHijri = (locale = 'en-US') => {
  const utcNowDate = Date.UTC(
    Number(new Date().getFullYear()), 
    Number(new Date().getMonth()), 
    Number(new Date().getDate()), 
    Number(new Date().getHours()), 
    Number(new Date().getMinutes()), 
    Number(new Date().getSeconds()), 
    Number(new Date().getMilliseconds())
  )
  let newDate = new Intl.DateTimeFormat(locale, { 
    calendar: 'islamic',
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hourCycle: 'h24'
  }).format(new Date(utcNowDate))
  return newDate
}
