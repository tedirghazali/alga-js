export const range = (...restArg) => {
  if(restArg.length === 0 || restArg.length >= 4) {
    throw new Error('Here only accept 3 arguments, so you have to provide at least 1 argument')
  }
  
  const startNum = (restArg.length === 1)? 0 : Number(restArg[0])
  const endNum = (restArg.length >= 2)? Number(restArg[1]) : Number(restArg[0])
  let stepNum = (restArg.length === 3)? Number(restArg[2]) : 1
  
  const newArr = []
  if(startNum === 0) {
    newArr.push(0)
  }
  
  let loopNum = 0
  let result = 0
  
  if(startNum <= endNum) {
    loopNum = loopNum
    while(loopNum < endNum) {
      loopNum++
      result += stepNum
      if(result < endNum) {
        newArr.push(result)
      }
    }
  } else {
    loopNum = endNum
    if(stepNum === 1) {
      stepNum = -1
    }
    while(loopNum < startNum) {
      loopNum++
      result = result + stepNum
      if(result > endNum) {
        newArr.push(result)
      }
    }
  }
  
  return newArr
}
