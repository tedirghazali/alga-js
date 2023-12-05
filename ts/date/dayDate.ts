import { weekDates } from './weekDate'

export const day = (dateArg: Date | string | number = new Date(), locale: string = 'en-US', dayType: string = 'long'): string => {
  const currentDate: Date = new Date(dateArg)
  //@ts-ignore
  return new Intl.DateTimeFormat(locale, { weekday: dayType }).format(currentDate)
}

export const days = (dateArg: Date | string | number = new Date(), locale: string = 'en-US', dayType: string = 'long'): any[] => {
  const newDays: any[] = []
  const newWeeks: string[] = weekDates(dateArg)
  for(let newWeek of newWeeks) {
    const newObj: any = {} 
    const currentDate: Date = new Date(newWeek || null)
    newObj['value'] = newWeek
    //@ts-ignore
    newObj['text'] = new Intl.DateTimeFormat(locale, { weekday: dayType}).format(currentDate)
    newDays.push(newObj)
  }
  return newDays
}
