import { isArray } from './isArray.js'

export const unique = (fromArr, byProp = undefined) => {
  if(!isArray(fromArr)) {
    throw new Error('')
  }
  
  const fromArray = Array.from(fromArr)
  let newArray = []
  
  if(typeof byProp === 'string') {
    let newSet = new Set()
    for(const oriItem of fromArray) {
      if(!newSet.has(oriItem[byProp])) {
        newSet.add(oriItem[byProp])
      }
    }
    newArray = [...newSet]
  } else {
    newArray = Array.from(new Set(fromArray))
  }
  
  return newArray
}

