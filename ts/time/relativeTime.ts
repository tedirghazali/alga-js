import { isBefore } from '../date/isDate'
import { daysInBetween } from '../date/numberDate'
import { doubleFormat } from '../date/stringDate'
import { hoursInBetween } from './numberTime'

export const relative = (dateValue: Date | string | number, timeZone: string = 'utc', locale: string = 'en-US', options: any = {}, type: string = 'long') => {
  const nowDate: Date = new Date()
  let valDate: Date = new Date(dateValue)
  if(timeZone !== 'utc') {
    valDate = new Date(new Date(dateValue).toJSON())
  }
  
  let seconds = Math.round((valDate.valueOf() - nowDate.valueOf()) / 1000)
  let newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(seconds, 'second')
  if(type === 'short') {
    newTimeRelative = `${Math.abs(Math.round(seconds))}s`
  }
  
  let interval = seconds / 31536000
  if (Math.abs(interval) > 1) {
    const newInterval = Math.round(interval)
    newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'year')
    if(type === 'short') {
      newTimeRelative = `${Math.abs(Math.round(newInterval))}y`
    }
  } else {
    interval = seconds / 2592000
    if (Math.abs(interval) > 1) {
      const newInterval = Math.round(interval)
      newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'month')
      if(type === 'short') {
        newTimeRelative = `${Math.abs(Math.round(newInterval))}mo`
      }
    } else {
      interval = seconds / 86400;
      if (Math.abs(interval) > 1) {
        const newInterval = Math.round(interval)
        newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'day')
        if(type === 'short') {
          newTimeRelative = `${Math.abs(Math.round(newInterval))}d`
        }
      } else {
        interval = seconds / 3600;
        if (Math.abs(interval) > 1) {
          const newInterval = Math.round(interval)
          newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'hour')
          if(type === 'short') {
            newTimeRelative = `${Math.abs(Math.round(newInterval))}h`
          }
        } else {
          interval = seconds / 60;
          if (Math.abs(interval) > 1) {
            const newInterval = Math.round(interval)
            newTimeRelative = new Intl.RelativeTimeFormat(locale, options).format(newInterval, 'minute')
            if(type === 'short') {
              newTimeRelative = `${Math.abs(Math.round(newInterval))}m`
            }
          }
        }
      }
    }
  }
  
  return newTimeRelative
}
