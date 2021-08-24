import { isArray } from './isArray.js'

export const select = (fromArr, ...selProp) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, you have to provide array only')
  }
  if(selProp.length < 1) {
    throw new Error('On the second argument, you must enter at least one value')
  }
  
  const newArray = Array.from(fromArr) 
  return newArray.map(item => {
    const newObject = {}
    for(let sel of selProp) {
      if(sel in item) {
        newObject[sel] = item[sel]
      }
    }
    return newObject
  })
}

export const hidden = (fromArr, ...selProp) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, you have to provide array only')
  }
  if(selProp.length < 1) {
    throw new Error('On the second argument, you must enter at least one value')
  }
    
  const newArray = Array.from(fromArr)
  return newArray.map(item => {
    const newObject = item
    for(let sel of selProp) {
      if(sel in item) {
        delete newObject[sel]
      }
    }
    return newObject
  })
}
