import { isArray } from './isArray.js'

export const union = (...restArg) => {
  if(!restArg && restArg.length <= 1) {
    throw new Error('You have to provide here at least 2 arguments')
  }
  
  const set = new Set()
  for(let arr of restArg) {
    if(isArray(arr)) {
      arr.forEach(item => {
        if(!set.has(item)) {
          set.add(item)
        }
      })
    } else {
      if(!set.has(arr)) {
        set.add(arr)
      }
    }
  }
  
  return Array.from(set)
}
