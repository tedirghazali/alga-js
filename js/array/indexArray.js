import { isArray } from './isArray.js'

export const index = (indexArr, options = { key: 'id', value: 0}) => {
  if(!isArray(indexArr)) {
    throw new Error('You must enter the first argument in array only')
  }
  
  const indexedArray = Array.from(indexArr)
  let resultNum = -1
  if('key' in options && 'value' in options) {
    resultNum = (indexedArray.length >= 1) ? indexedArray.findIndex(obj => obj[options.key] === options.value) : -1
  } else {
    if(indexedArray.length >= 1) {
      resultNum = indexedArray.findIndex(obj => {
        for(const [key, val] of Object.entries(options)) {
          if(key in obj && obj[key] === val) {
            return true
          }
        }
      })
    }
  }
  
  return resultNum
}

export const toIndex = (fromArr, typeStr = 'dense') => {
  if(!isArray(fromArr)) {
    throw new Error('You must enter the first argument in array only')
  }
  
  let resIndex = []
  if(typeStr === 'sparse') {
    resIndex = Object.keys(fromArr).map(item => Number(item))
  } else {
    resIndex = [...fromArr.keys()]
  }
  return resIndex
}

export const randomIndex = (fromIndexArr) => {
  if(!isArray(fromIndexArr)) {
    throw new Error('You must enter the argument in array only')
  }
  
  const indexArr = toIndex(fromIndexArr)
  let ranInd = Number(indexArr[Math.floor(Math.random() * indexArr.length)])
  
  return ranInd
}
