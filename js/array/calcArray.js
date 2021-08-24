import { isArray } from './isArray.js'
import { isFunction } from '../func/isFunc.js'
import { isString } from '../string/isString.js'

export const calc = (fromArr, newProp, callBack) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, you have to provide array only')
  }
  if(!isString(newProp)) {
    throw new Error('New property must be in string type')
  }
  if(!isFunction(callBack)) {
    throw new Error('Callback must be in function or method')
  }
  
  const newArray = Array.from(fromArr) 
  return newArray.map(item => {
    item[newProp] = callBack(...Object.values(item).filter(i => isNaN(i) === false))
    return item
  })
}

