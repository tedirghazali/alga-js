import { isArray } from './isArray.js'
import { isFunction } from '../function/isFunction.js'

export const group = (param, callback) => {
  if(!isArray(param)) {
    throw new Error('You must enter array literal here')
  }
  if(!isFunction(callback)) {
    throw new Error('You have to enter a function or callback on the second argument')
  }
  
  const obj = {}
  for(let item of param) {
    if(obj[callback(item).toString()] === undefined) {
      obj[callback(item).toString()] = []
    }
    obj[callback(item).toString()].push(item)
  }
  return obj
}
