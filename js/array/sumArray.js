import { isArray } from './isArray.js'

export const sum = (fromArr, byObj = undefined) => {
  if(!isArray(fromArr)) {
    throw new Error('In the first argument, you must enter a data in array')
  }
  
  const newArray = Array.from(fromArr)
  let sumNum = 0
  if(newArray.length >= 1) {
    if(typeof byObj === 'string' && byObj !== '') {
      const numArray = newArray.map(item => {
        if(byObj in item) {
          return Number(item[byObj])
        } else {
          return 0
        }
      })
      sumNum = numArray.reduce((accumulator, current) => Number(accumulator) + Number(current))
    } else {
      sumNum = newArray.reduce((acc, val) => Number(acc) + Number(val))
    }
  }
  return sumNum
}
