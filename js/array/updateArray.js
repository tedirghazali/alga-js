import { index } from './indexArray.js'
import { isArray } from './isArray.js'
import { replace } from '../object/mergeObject.js'
import { isObject } from '../object/isObject.js'

const update = (setObj) => {
  if(!isObject(setObj)) {
    throw new Error('You must enter object only here')
  }
  
  return (oriArr, whereObj) => {
    if(!isArray(oriArr)) {
      throw new Error('You have to enter array only on the first argument')
    }
    if(!isObject(whereObj)) {
      throw new Error('You must enter object only on the second argument')
    }
    
    const oriArray = Array.from(oriArr)
    let newArray = []
    const indexNum = index(oriArray, whereObj)
    newArray = oriArray.map((obj, ind) => {
      let resMap = obj
      if(ind === indexNum) {
        resMap = replace(obj, setObj)
      }
      return resMap
    })
    return newArray
  }
}

export {
  update
}
