import { isArray } from './isArray.js'
import { isString } from '../string/isString.js'
import { isNumber } from '../number/isNumber.js'
import { isObject } from '../object/isObject.js'
import { unique } from './uniqueArray.js'

export const search = (fromArr, ...searchStr) => {
  if(!isArray) {
    throw new Error('The first argument must be in array')
  }
  if(searchStr.length < 1) {
    throw new Error('On the next arguments, you must provide at least one argument in either string or number')
  }

  let filteredArray = []
  for(let searchString of searchStr) {
    const filterFromArr = Array.from(fromArr).filter(obj => {
      if(isNumber(obj) && Number(obj) === Number(searchString)) {
        return true
      } else if(isString(obj) && obj.toLowerCase().includes(searchString.toLowerCase())) {
        return true
      } else if(isObject(obj)) {
        for(const [key, val] of Object.entries(obj)) {
          if(isNumber(obj[key]) && Number(val) === Number(searchString)) {
            return true
          } else if(isString(obj[key]) && val.toLowerCase().includes(searchString.toLowerCase())) {
            return true
          }
        }
      }
      return false
    })
    filteredArray = unique(filteredArray.concat(filterFromArr))
  }
    
  return filteredArray
}

export const searchBy = (...filterStr) => {
  if(filterStr.length < 1) {
    throw new Error('This argument must have at least one argument in either string or number')
  }
  
  return (fromArr, ...whereArr) => {
    if(!isArray(fromArr)) {
      throw new Error('Array of objects is needed in order to be searched')
    }
    if(whereArr.length < 1) {
      throw new Error('The last argument required at least one argument in either string or number')
    }
    
    let filteredArray = []
    for(let filterString of filterStr) {
      const filterFromArr = Array.from(fromArr).filter(obj => {
        for(const val of Array.from(whereArr)) {
          if(val in obj) {
            if(isNumber(obj[val]) && Number(obj[val]) === Number(filterString)) {
              return true
            } else if(isString(obj[val]) && obj[val].toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
              return true
            }
          }
        }
        return false
      })
      filteredArray = unique(filteredArray.concat(filterFromArr))
    }
    
    return filteredArray
  }
}
