import { index } from './indexArray.js'
import { isArray } from './isArray.js'
import { replace } from '../object/mergeObject.js'
import { isObject } from '../object/isObject.js'
import { isNumber } from '../number/isNumber.js'

export const update = (fromArr, setObj, whereArg) => {
  if(!isArray(fromArr)) {
    throw new Error('You have to enter array only on the first argument')
  }
  if(!isObject(setObj)) {
    throw new Error('You must enter object only here on the second argument')
  }
  if(!isObject(whereArg) && !isNumber(whereArg)) {
    throw new Error('You must enter object only on the second argument')
  }
    
  const fromArray = Array.from(fromArr)
  let newArray = []
  const indexNum = isObject(whereArg) ? index(fromArray, whereArg) : Number(whereArg)
  newArray = fromArray.map((obj, ind) => {
    let resMap = obj
    if(ind === indexNum) {
      resMap = replace(obj, setObj)
    }
    return resMap
  })
  return newArray
}

export const updateBy = (fromArr, setObj, whereArr) => {
  if(!isArray(fromArr)) {
    throw new Error('You have to enter array only on the first argument')
  }
  if(!isObject(setObj)) {
    throw new Error('You must enter object only here on the second argument')
  }
  if(!isArray(whereArr)) {
    throw new Error('You must enter array of objects or numbers on the second argument')
  }
    
  const fromArray = Array.from(fromArr)
  let newArray = []
  newArray = fromArray.map((obj, ind) => {
    let resMap = obj
    for(let where of whereArr) {
      const indexNum = isObject(where) ? index(fromArray, where) : Number(where)
      if(ind === indexNum) {
        resMap = replace(obj, setObj)
      }
    }
    return resMap
  })
  return newArray
}
