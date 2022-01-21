import { isObject } from './isObject.js'

const remove = (fromObj, ...propKey) => {
  if(!isObject(fromObj)) {
    throw new Error('This is object helper, you must provide the first argument in an object')
  }
  if(propKey.length < 1) {
    throw new Error('The next arguments must be in a string and at least one argument')
  }
  
  const newObj = Object.assign({}, fromObj)
  for(const key of propKey) {
    if(key in newObj) {
      delete newObj[key]
    }
  }
    
  return newObj
}

const removeBy = (fromObj, ...propVal) => {
  if(!isObject(fromObj)) {
    throw new Error('This is object helper, you must provide the first argument in an object')
  }
  if(propVal.length < 1) {
    throw new Error('The next arguments must be in a string or in a number and at least one argument')
  }
    
  const newObj = {}
  const newSet = new Set(propVal)
  for(const key of Object.keys(fromObj)) {
    if(!newSet.has(fromObj[key])) {
      newObj[key] = fromObj[key]
    }
  }
    
  return newObj
}

export {
  remove,
  removeBy
}
