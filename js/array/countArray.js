import { isArray } from './isArray.js'
import { isFunction } from '../func/isFunc.js'

export const countDuplication = (arrArg) => {
  if(!isArray(arrArg)) {
    throw new Error('This argument only accept array')
  }
  
  const newObj = {}
  const newSet = new Set()
  for(let setItem of new Set(arrArg)) {
    const tempArr = Array.from(arrArg).filter(filterItem => filterItem === setItem)
    if(!newSet.has(tempArr.length)) {
      newSet.add(tempArr.length)
      newObj[tempArr.length] = []
    }
    tempArr.forEach(arrItem => {
      newObj[tempArr.length].push(arrItem)
    })
  }
  
  return newObj
}

export const countBy = (arrParam, callbackParam) => {
  if(!isArray(arrParam)) {
    throw new Error('The first paramenter only accept array')
  }
  if(!isFunction(callbackParam)) {
    throw new Error('The second paramenter only accept callback function')
  }
  return arrParam.filter(item => callbackParam(item)).length
}
