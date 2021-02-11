const search = (searchStr) => {
  if(typeof searchStr !== 'string') return throw new TypeError()
  return (fromArr) => {
    if(typeof fromArr !== 'object') return throw new TypeError()
    
    const filteredArray = Array.from(fromArr).filter(obj => {
      for(const [key, val] of Object.entries(obj)) {
        if(typeof val === 'string' && val.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1) {
          return true
        } else if(typeof val === 'number' && val === Number(searchStr)) {
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
