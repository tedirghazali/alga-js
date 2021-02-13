const search = (searchStr) => {
  if(typeof searchStr !== 'string') return
  return (fromArr) => {
    if(typeof fromArr !== 'object') return
    
    const filteredArray = Array.from(fromArr).filter(obj => {
      for(const [key, val] of Object.entries(obj)) {
        if(typeof obj[key] === 'string' && val.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1) {
          return true
        } else if(typeof obj[key] === 'number' && val === Number(searchStr)) {
          return true
        }
      }
      return false
    })
    
    return filteredArray
  }
}

export {
  search
}
