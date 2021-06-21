import { index } from './indexArray.js'
import { isArray } from './isArray.js'

export const destroy = (oriArr, ...whereOpt) => {
  if(!isArray(oriArr)) {
    throw new Error('Please provide array that you want to remove its element')
  }
  if(whereOpt.length < 1) {
    throw new Error('On the last of argument, you have to enter at least one argument')
  }
  
  let oriArray = Array.from(oriArr)
  let newArray = []
  for(const opt of whereOpt) {
    if(typeof opt === 'string' && opt === 'first') {
      oriArray = oriArray.map((obj, ind) => {
        if(ind === 0) {
          return null
        } else {
          return obj
        }
      })
      newArray = oriArray
    } else if(typeof opt === 'string' && opt === 'last') {
      oriArray = oriArray.map((obj, ind) => {
        if(ind === (oriArray.length - 1)) {
          return null
        } else {
          return obj
        }
      })
      newArray = oriArray
    } else if(typeof opt === 'number') {
      oriArray = oriArray.map((obj, ind) => {
        if(ind === opt) {
          return null
        } else {
          return obj
        }
      })
      newArray = oriArray
    } else if(typeof opt === 'object' && opt !== null) {
      const indx = index(oriArray, opt)
      oriArray = oriArray.map((obj, ind) => {
        if(ind === indx) {
          return null
        } else {
          return obj
        }
      })
      newArray = oriArray
    }
  }
  return newArray.filter(obj => obj !== null)

}

