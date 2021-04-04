import { format } from './formatDate.js'

export const now = (dateFormat = undefined) => {
  let newDate = new Date().toString()
  
  if(typeof dateFormat === 'string') {
    newDate = format(newDate.toString(), dateFormat)
  }
  
  return newDate
}
