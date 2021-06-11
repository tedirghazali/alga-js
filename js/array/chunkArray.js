import { isArray } from './isArray.js'
import { range } from './rangeArray.js'

export const chunk = (arrArg, sizeArg = 2) => {
  if(!isArray(arrArg) && arrArg.length <= 2) {
    throw new Error('Please insert array only on the first argument and must have 3 values at least')
  }
  if(typeof sizeArg !== 'number') {
    throw new Error('On the second argument, you must input in a number type only')
  }
  
  const stepArr = range(sizeArg, arrArg.length, sizeArg)
  const newArr = []
  for(const step of stepArr) {
    const childArr = arrArg.slice((Number(step) - Number(sizeArg)), step)
    newArr.push(childArr)
  }
  if(stepArr[Number(stepArr.length) - 1] <= arrArg.length) {
    newArr.push(arrArg.slice(stepArr[Number(stepArr.length) - 1], arrArg.length))
  }
  
  return newArr
}
