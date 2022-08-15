import { isBefore } from '../date/isDate'
import { daysInBetween } from '../date/numberDate'
import { doubleFormat } from '../date/stringDate'

export const relative = (dateValue: Date | string | number, timeZone: string = 'utc', locale: string = 'en-US', options: any = {}, defaultValue: string = 'new') => {
  const nowDate: Date = new Date()
  let valDate: Date = new Date(dateValue)
  if(timeZone !== 'utc') {
    valDate = new Date(new Date(dateValue).toJSON())
  }
  
  let newTimeRelative = `${defaultValue}`
  let compareDate = daysInBetween(valDate, nowDate)
  if(Number(compareDate) <= 365) {
    if(Number(compareDate) <= 28) {
      if(Number(nowDate.getDate()) === Number(valDate.getDate())) {
        if(Number(nowDate.getHours()) === Number(valDate.getHours())) {
          if(Number(nowDate.getMinutes()) === Number(valDate.getMinutes())) {
            const subSecondVal = Number(valDate.getSeconds()) - Number(nowDate.getSeconds())
            newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(subSecondVal, 'second')
          } else {
            const subMinuteVal = Number(valDate.getMinutes()) - Number(nowDate.getMinutes())
            newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(subMinuteVal, 'minute')
          }
        } else {
          const subHourVal = Number(valDate.getHours()) - Number(nowDate.getHours())
          newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(subHourVal, 'hour')
        }
      } else {
        if(isBefore(valDate, nowDate)) {
          compareDate = Number('-' + daysInBetween(valDate, nowDate))
        } else {
          compareDate = daysInBetween(valDate, nowDate)
        }
        newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(compareDate, 'day')
      }
    } else {
      const subMonthVal = Number(`${valDate.getFullYear()}${doubleFormat(valDate.getMonth())}`) - Number(`${nowDate.getFullYear()}${doubleFormat(nowDate.getMonth())}`)
      newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(subMonthVal, 'month')
    }
  } else {
    const subYearVal = Number(valDate.getFullYear()) - Number(nowDate.getFullYear())
    newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(subYearVal, 'year')
  }
  
  return newTimeRelative
}
