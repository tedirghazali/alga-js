const filtered = (filterStr) => {
  if(typeof filterStr !== 'string') return
  return (fromArr, whereArr) => {
    if(typeof fromArr !== 'object') return
    
    const filteredArray = Array.from(fromArr).filter(obj => {
      for(const val of Array.from(whereArr)) {
        if(val in obj) {
          if(typeof obj[val] === 'string' && obj[val].toLowerCase().indexOf(filterStr.toLowerCase()) !== -1) {
            return true
          } else if(typeof obj[val] === 'number' && obj[val] === Number(filterStr)) {
            return true
          }
        }
      }
      return false
    })
    
    return filteredArray
  }
}

export {
  filtered
}
