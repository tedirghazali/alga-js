import { isArray } from './isArray.js'
import { intersection } from './intersectionArray.js'

export const difference = (...restArg) => {
  if(!restArg && restArg.length <= 1) {
    throw new Error('You have to provide here at least 2 arguments')
  }
  
  const set = new Set()
  const interArr = intersection(...restArg)
  restArg.forEach(arr => {
    if(!isArray(arr)) {
      throw new Error('Here only accept arrays from all arguments')
    }
    for(let item of arr) {
      if(!interArr.includes(item) && !set.has(item)) {
        set.add(item)
      }
    }
  })
  
  return Array.from(set)
}

export const asymmetricDifference = (...restArg) => {
  if(!restArg && restArg.length <= 1) {
    throw new Error('You have to provide here at least 2 arguments')
  }
  
  const set = new Set()
  const temp = []
  for(let arr of restArg) {
    if(!isArray(arr)) {
      throw new Error('Here only accept arrays from all arguments')
    }
    
    arr.forEach(item => {
      if(set.has(item)) {
        set.delete(item)
        temp.push(item)
      } else {
        if(!temp.includes(item)) {
          set.add(item)
        }
      }
    })
  }
  
  return Array.from(set)
}

export const complement = (...restArg) => {
  if(!restArg && restArg.length <= 1) {
    throw new Error('You have to provide here at least 1 value')
  }
  
  const restArr = Array.from(restArg)
  restArr.shift()
  
  const set = new Set(without(restArg[0], ...restArr))
  return Array.from(set)
}

export const without = (arrArg, ...restArg) => {
  if(!isArray(arrArg) && arrArg.length <= 0) {
    throw new Error('You need to provide more values to your array')
  }
  if(!restArg && restArg.length <= 0) {
    throw new Error('You have to provide here at least 1 value')
  }
    
  const arr = []
  for(let item of arrArg) {
    if(!restArg.flat().includes(item)) {
      arr.push(item)
    }
  }
  
  return arr
}
