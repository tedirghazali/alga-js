import { isArray } from './isArray.js'

export const select = (fromArr, ...selProp) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, you have to provide array only')
  }
  if(selProp.length < 1) {
    throw new Error('On the second argument, you must enter at least one value')
  }
  
  const fromArray = Array.from(fromArr)
  let newArray = []
  for(const obj of fromArray) {
    let newObject = {}
    selProp.forEach(sel => {
      if(sel in obj) {
        newObject[sel] = obj[sel]
      }
    })
    newArray.push(newObject)
  }
    
  return newArray
}

export const hidden = (fromArr, ...selProp) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, you have to provide array only')
  }
  if(selProp.length < 1) {
    throw new Error('On the second argument, you must enter at least one value')
  }
    
  const fromArray = Array.from(fromArr)
  let newArray = []
  for(const obj of fromArray) {
    let newObject = obj
    selProp.forEach(sel => {
      if(sel in obj) {
        delete newObject[sel]
      }
    })
    newArray.push(newObject)
  }
    
  return newArray
}
