export const zip = (...restArr) => {
  if(restArr.length < 2) {
    throw new Error('You have to provide at least 2 arguments, both in arrays with the same length')
  }
  
  const oriArr = Array.from(restArr)
  const newArr = []
  
  const firstArr = oriArr.shift()
  
  for(let varArr of oriArr) {
    const newMap = new Map()
    varArr.forEach((item, ind) => {
      if(firstArr[ind]) {
        newMap.set(firstArr[ind], item)
      }
    })
    newArr.push(Object.fromEntries(newMap))
  }
  
  return newArr
}

