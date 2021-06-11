import { isArray } from './isArray.js'
import { randomIndex } from './indexArray.js'
import { switched } from './moveArray.js'

export const shuffle = (arrArg) => {
  if(!isArray(arrArg) && arrArg.length <= 2) {
    throw new Error('This shuffle method only work on data in array type')
  }
  
  let newArr = Array.from(arrArg)
  for(let i = Number(newArr.length) - 1; i > 2;i--) {
    const sliceArr = newArr.slice(0, Number(i) + 1)
    newArr = switched(i)(newArr, randomIndex(sliceArr))
  }
  
  return newArr
}
