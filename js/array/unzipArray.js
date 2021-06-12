import { transpose } from './transposeArray.js'

export const unzip = (...restArr) => {
  if(restArr.length < 2) {
    throw new Error('You have to provide at least 2 arguments, both in arrays with the same length')
  }
  
  const oriArr = Array.from(restArr)
  const objKeys = Object.keys(oriArr[0])
  const newObj = {}
  
  for(let key of objKeys) {
    newObj[key] = []
  }
  
  for(let obj of oriArr) {
    for(let prop in obj) {
      newObj[prop].push(obj[prop])
    }
  }
  
  return [objKeys, ...transpose(...Object.values(newObj))]
}
