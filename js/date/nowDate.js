import { format } from './formatDate.js'

const now = (dateFormat = undefined) => {
  let newDate = new Date()
  
  if(typeof dateFormat === 'string') {
    newDate = format(newDate.toString(), dateFormat)
  }
  
  return newDate
}

export {
  now
}
