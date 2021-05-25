import { isArray } from './isArray.js'

export const compact = (argArr) => {
  if(!isArray(argArr)) {
    throw new Error('Enter only array type here')
  }
  
  const newArr = Array.from(argArr)
  return newArr.filter(val => val !== undefined && val !== null && val !== false && val !== NaN && val !== "" && val > 0)
}
