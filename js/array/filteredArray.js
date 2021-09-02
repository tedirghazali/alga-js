import { isArray } from './isArray.js'
import { isObject } from '../object/isObject.js'
import { isNumber } from '../number/isNumber.js'
import { isString } from '../string/isString.js'

export const filtered = (fromArr, filterObj) => {
  if(!isArray(fromArr)) {
    throw new Error('The first argument must be in array of objects')
  }
  if(!isObject(filterObj)) {
    throw new Error('The second argument must be in object type and must have at least one property')
  }
  
  let filteredArray = Array.from(fromArr)
  
  for(let [ftrKey, ftrVal] of Object.entries(filterObj)) {
    const filterFromArr = filteredArray.filter(obj => {
      if(ftrKey in obj) {
        if(isNumber(obj[ftrKey]) && Number(obj[ftrKey]) === Number(ftrVal)) {
          return true
        } else if(isString(obj[ftrKey]) && obj[ftrKey].toLowerCase().includes(ftrVal.toLowerCase())) {
          return true
        }
      }
      return false
    })
    filteredArray = filterFromArr
  }
    
  return filteredArray
}
