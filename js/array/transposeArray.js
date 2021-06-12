export const transpose = (...restArr) => {
  if(restArr.length < 2) {
    throw new Error('You have to provide at least 2 arguments, both in arrays with the same length')
  }
  
  const newObj = {}
  const lengthArr = restArr[0].length
  
  for(let i = 0;i < lengthArr;i++) {
    newObj[i] = []
  }
  
  for(let varArr of restArr) {
    varArr.forEach((item, ind) => {
      if(String(ind) in newObj) {
        newObj[ind].push(item)
      }
    })
  }
  
  return Object.values(newObj)
}
