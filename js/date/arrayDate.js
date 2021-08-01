import { isFullDate } from './isDate.js'

export const dateToArray = (date) => {
  if(!isFullDate(date)) {
    throw new Error('Please enter a valid date')
  }
  
  const newDate = new Date(date).toJSON()
  return newDate.replace('Z', '').split(/-|:|\s|\.|T/g)
}
