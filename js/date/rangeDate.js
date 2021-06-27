import { isFullDate, isFormatDate } from './isDate.js'
import { format } from './formatDate.js'
import { addDate } from './addDate.js'
import msgDate from './msgDate.js'

export const rangeDate = (startDate, endDate, formatParam = null) => {
  if(!isFullDate(firstDate)) {
    throw new Error('Error in the first argument: '+msgDate.fullDateMsg)
  }
  if(!isFullDate(lastDate)) {
    throw new Error('Error in the second argument: '+msgDate.fullDateMsg)
  }
  
  const firstDate = new Date(startDate)
  const lastDate = new Date(endDate)
  const arrayDate = []
  let currentDate = firstDate
  // iterasi tanggal dan push kedalam array
  while(currentDate <= lastDate) {
    const formatDate = (formatParam !== null && isFormatDate(formatParam) !== false) ? format(currentDate, formatParam) : currentDate
    arrayDate.push(formatDate)
    currentDate = addDate(currentDate, 1)
  }
  // tanggal dalam array
  return arrayDate
}
