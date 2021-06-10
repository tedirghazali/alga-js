import { isArray } from './isArray.js'
import { isNumber } from '../number/isNumber.js'
import { destroy } from './destroyArray.js'
import { intersection } from './intersectionArray.js'

export const move = (...indexes) => {
  if(indexes.length === 0) {
    throw new Error('Only accept index of array elements and you must input at least one index in number type')
  }
  return (fromArr, toIndex, removeCount = 0) => {
    if(!isArray(fromArr)) {
      throw new Error('Please enter array only here')
    }
    if(!isNumber(toIndex)) {
      throw new Error('Input only index number here')
    }
    
    const oriArr = Array.from(fromArr)
    const tempArr = []
    
    for(let ind of indexes) {
      if(oriArr[Number(ind)] !== undefined) {
        tempArr.push(oriArr[Number(ind)])
      }
    }
    
    const newArr = destroy(oriArr, ...indexes)
    
    newArr.splice(toIndex, removeCount, ...tempArr)
    
    return newArr
  }
}

export const switched = (...fromIndex) => {
  if(fromIndex.length === 0) {
    throw new Error('Accept index of array elements only and you add at least one index in number')
  }
  return (fromArr, ...withIndex) => {
    if(!isArray(fromArr)) {
      throw new Error('Please enter array only here')
    }
    if(withIndex.length === 0 && withIndex.length !== fromIndex.length && intersection(fromIndex, withIndex).length !== 0) {
      throw new Error('Only accept index of array elements and the number of the first indexes must be the same as the second indexes and also, both indexes must be different')
    }
    
    const oriArr = Array.from(fromArr)
    const newArr = Array.from(fromArr)
    
    for(let i = 0;i < fromIndex.length;i++) {
      if(fromIndex[i] !== undefined && withIndex[i] !== undefined) {
        newArr.splice(fromIndex[i], 1, oriArr[withIndex[i]])
        newArr.splice(withIndex[i], 1, oriArr[fromIndex[i]])
      }
    }
    
    return newArr
  }
}

export const transfer = (...indexes) => {
  if(indexes.length === 0) {
    throw new Error('Only accept index of array elements and you must enter at least one index in number type')
  }
  return (fromArr, toArr, byIndex = null) => {
    if(!isArray(fromArr)) {
      throw new Error('Accept array only here')
    }
    if(!isArray(toArr)) {
      throw new Error('Accept array only here')
    }
    if(!isNumber(byIndex)) {
      throw new Error('Input only index number here')
    }
    
    const varFromArr = Array.from(fromArr)
    const varToArr = Array.from(toArr)
    let tempArr = []
    
    for(let ind of indexes) {
      if(varFromArr[Number(ind)] !== undefined) {
        tempArr.push(varFromArr[Number(ind)])
      }
    }
    
    const byInd = (byIndex === null) ? Number(varToArr.length) : byIndex
    
    varToArr.splice(byInd, 0, ...tempArr)
    
    const newArr = destroy(varFromArr, ...indexes)
    
    return {
      from: newArr,
      to: varToArr
    }
  }
}
