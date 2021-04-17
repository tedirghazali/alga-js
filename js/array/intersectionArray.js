import { isArray } from './isArray.js'
import { countDuplication } from './countArray.js'

export const intersection = (...restArg) => {
  if(!restArg && restArg.length <= 1) {
    throw new Error('You have to provide here at least 2 arguments')
  }
  
  const newArr = []
  const obj = {}
  restArg.forEach((arr, index) => {
    if(isArray(arr)) {
      obj[index] = new Set(arr)
    } else {
      obj[index] = new Set().add(arr)
    }
    if(index !== 0) {
      for(let item of arr) {
        if(obj[index - 1].has(item)) {
          newArr.push(item)
        }
      }
    }
  })
  
  const filter = countDuplication(newArr)
  return Array.from(new Set(filter[restArg.length - 1]))
}
