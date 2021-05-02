export const filtered = (...filterStr) => {
  if(!filterStr) return
  return (fromArr, whereArr) => {
    if(typeof fromArr !== 'object') return
    
    let filteredArray = Array.from(fromArr)
    filterStr.forEach((filterString, index) => {
      const filterFromArr = filteredArray.filter(obj => {
        if(whereArr[index] !== undefined || whereArr[index] !== null) {
          const val = whereArr[index]
          if(val in obj) {
            if(Number(obj[val]) !== 'NaN' && Number(obj[val]) === Number(filterString)) {
              return true
            } else if(typeof obj[val] === 'string' && obj[val].toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
              return true
            }
          }
        }
        return false
      })
      filteredArray = filterFromArr
    })
    
    return filteredArray
  }
}
