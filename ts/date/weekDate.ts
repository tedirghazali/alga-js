import { daysInYear } from './numberDate'
import { format } from './formatDate'

export const week = (current: Date | string | number = new Date()): number => {
  const currentDate: Date = new Date(current || null)
  currentDate.setTime(currentDate.getTime() + 24 * 60 * 60 * 1000)
  const startDate: Date = new Date(currentDate.getFullYear(), 0, 1)
  const currentDays = Math.floor((Number(currentDate.valueOf()) - Number(startDate.valueOf())) / (24 * 60 * 60 * 1000));

  let subtractWeek = 0
  if(Number(startDate.getDay()) !== 0) {
    subtractWeek = 1
  }

  return Number(Math.ceil(currentDays / 7)) - Number(subtractWeek)
}

export const weeks = (): number => {
  const daysOfYear: number = Number(daysInYear(new Date().getFullYear()))
  const startDate: Date = new Date(new Date().getFullYear(), 0, 1)
  
  let subtractWeek = 0
  if(Number(startDate.getDay()) !== 0) {
    subtractWeek = 1
  }

  return Number(Math.ceil(daysOfYear / 7)) - Number(subtractWeek)
}

export const weekDates = (current: Date | string | number = new Date()): string[] => {
  let newWeekDates: string[] = []
  const currentDate: Date = new Date(current || null)

  for(let i = Number(currentDate.getDay()); i >= 0; i--) {
    newWeekDates.push(format(new Date(currentDate.getFullYear(), currentDate.getMonth(), Number(currentDate.getDate()) - Number(i)), 'date'))
  }

  for(let j = Number(currentDate.getDay()) - 1; j < 5; j++) {
    newWeekDates.push(format(new Date(currentDate.getFullYear(),currentDate.getMonth(), Number(currentDate.getDate()) + Number(j)), 'date'))
  }

  return newWeekDates
}
