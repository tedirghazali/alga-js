import { isNegative, isPositive } from '../number/isNumber.js'

export const range = (...restArg) => {
  if(restArg.length === 0 || restArg.length >= 4) {
    throw new Error('Here only accept 3 arguments, so you have to provide at least 1 argument')
  }
  
  const startNum = (restArg.length === 1)? 0 : Number(restArg[0])
  const endNum = (restArg.length >= 2)? Number(restArg[1]) : Number(restArg[0])
  let stepNum = (restArg.length === 3)? Number(restArg[2]) : 1
  
  if(restArg.length < 3 && isNegative(endNum)) {
    stepNum = -1
  }
  
  const newArr = []
  let loopNum = 0
  let result = 0
  
  if(isNegative(startNum) && isPositive(endNum)) {
    loopNum = startNum - 1
  } else if(isPositive(startNum) && isNegative(endNum)) {
    loopNum = startNum + 1
  } else if(isPositive(startNum) && isPositive(endNum)) {
    loopNum = startNum - 1
  } else if(isNegative(startNum) && isNegative(endNum)) {
    loopNum = startNum + 1
  }
  
  if(loopNum < endNum) {
    while(loopNum < endNum) {
      loopNum++
      if(stepNum > 1) {
        result += stepNum
        if(result < endNum) {
          newArr.push(result)
        }
      } else {
        if(loopNum < endNum) {
          newArr.push(loopNum)
        }
      }
    }
    if(startNum === 0 && !newArr.includes(0)) {
      newArr.unshift(0)
    }
  } else if(loopNum > endNum) {
    while(loopNum > endNum) {
      loopNum--
      if(stepNum < -1) {
        result -= stepNum
        if(result > endNum) {
          newArr.unshift(result)
        }
      } else {
        if(loopNum > endNum) {
          newArr.unshift(loopNum)
        }
      }
    }
    if(startNum === 0 && !newArr.includes(0)) {
      newArr.push(0)
    }
  }
  
  return (newArr.length === 1 && newArr[0] === 0) ? [] : newArr
}
