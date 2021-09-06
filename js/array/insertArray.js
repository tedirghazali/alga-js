import { isArray } from './isArray.js'
import { isNumber } from '../number/isNumber.js'
import { isObject } from '../object/isObject.js'

export const insert = (fromArr, at = {position: null, index: null}, ...restVal) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, only array accept here')
  }
  if(!isObject(at)) {
    throw new Error('On the second argument, only object with 2 properties (position and index property) accepted')
  }
  if(restVal.length < 1) {
    throw new Error('On the third or the next arguments, you have to enter at least one argument')
  }
  
  let newArray = []
  if(at.position === 'first') {
    newArray = insertFirst(fromArr, ...restVal)
  } else if(at.position === 'last') {
    newArray = insertLast(fromArr, ...restVal)
  } else if(at.position === 'before') {
    newArray = insertBefore(fromArr, at.index, ...restVal)
  } else if(at.position === 'after') {
    newArray = insertAfter(fromArr, at.index, ...restVal)
  }
  return newArray
}

export const insertFirst = (fromArr, ...restVal) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument must be in array type')
  }
  if(restVal.length < 1) {
    throw new Error('On the next arguments, you have to provide at least one argument')
  }
  
  const fromArray = Array.from(fromArr)
  fromArray.unshift(...restVal)
  return fromArray
}

export const insertLast = (fromArr, ...restVal) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument must be in array type')
  }
  if(restVal.length < 1) {
    throw new Error('On the next arguments, you have to provide at least one argument')
  }
  
  const fromArray = Array.from(fromArr)
  fromArray.push(...restVal)
  return fromArray
}

export const insertBefore = (fromArr, atIndex, ...restVal) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array type')
  }
  if(!isNumber(atIndex)) {
    throw new Error('On the second argument, accept only numeric or number type')
  }
  if(restVal.length < 1) {
    throw new Error('On the next arguments, you have to enter at least one value')
  }
    
  const fromArray = Array.from(fromArr)
  const indexBefore = (isNaN(atIndex)) ? 1 : atIndex;
  fromArray.splice(Number(indexBefore) - 1, 0, ...restVal);
  return fromArray
}

export const insertAfter = (fromArr, atIndex, ...restVal) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array type')
  }
  if(!isNumber(atIndex)) {
    throw new Error('On the second argument, accept only numeric or number type')
  }
  if(restVal.length < 1) {
    throw new Error('On the next arguments, you have to enter at least one value')
  }
    
  const fromArray = Array.from(fromArr)
  const indexAfter = (isNaN(atIndex)) ? 0 : atIndex;
  fromArray.splice(Number(indexAfter) + 1, 0, ...restVal);
  return fromArray
}
