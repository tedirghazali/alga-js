import { isArray } from './isArray.js'

export const sum = (fromArr, byObj = null) => {
  if(!isArray(fromArr)) {
    throw new Error('In the first argument, you must enter a data in array')
  }
  
  const newArray = Array.from(fromArr)
  let sumNum = 0
  if(typeof byObj === 'string' && byObj !== '') {
    const numArray = []
    for(const na of newArray) {
      if(byObj in na) {
        numArray.push(na[byObj])
      }
    }
    sumNum = numArray.reduce((accumulator, current) => accumulator + current)
  } else {
    sumNum = newArray.reduce((acc, val) => acc + val)
  }
  return sumNum
}
