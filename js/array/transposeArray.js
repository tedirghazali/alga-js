import { isArray } from './isArray.js'

export const transpose = (...restArr) => {
  if(restArr.length < 2 && !isArray(restArr[0]) && !isArray(restArr[1]) && Number(restArr[0].length) !== Number(restArr[1].length)) {
    throw new Error('You have to provide at least 2 arguments, both in arrays with the same length')
  }
  
  const newArray = Array.from(restArr[0]).map((item) => {
    item = []
    return item
  })
  
  for(let itemArr of restArr) {
    itemArr.forEach((item, index) => {
      if(index in newArray) {
        newArray[index].push(item)
      }
    })
  }
  
  return newArray
}
