import { isArray } from './isArray.js'

export const countDuplication = (arrArg) => {
  if(!isArray(arrArg)) {
    throw new Error('This argument only accept array')
  }
  
  const newObj = {}
  const newSet = new Set()
  for(let setItem of new Set(arrArg)) {
    const tempArr = Array.from(arrArg).filter(filterItem => filterItem === setItem)
    if(!newSet.has(tempArr.length)) {
      newSet.add(tempArr.length)
      newObj[tempArr.length] = []
    }
    tempArr.forEach(arrItem => {
      newObj[tempArr.length].push(arrItem)
    })
  }
  
  return newObj
}
