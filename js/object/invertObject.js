import { isObject } from './isObject.js'
import { zip } from '../array/zipArray.js'

export const invert = (objArg) => {
  if(!isObject(objArg)) {
    throw new Error('You have to input object only here')
  }
  
  const allKeys = Object.keys(objArg)
  const allValues = Object.values(objArg)
  
  return zip(allValues, allKeys)[0]
}
