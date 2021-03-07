const remove = (...propKey) => {
  if(!propKey) return
  return (fromObj) => {
    if(typeof fromObj !== 'object' || fromObj === null) return
    
    let newObj = {}
    for(const [name] of Object.entries(fromObj)) {
      newObj[name] = fromObj[name]
    }
    for(const key of propKey) {
      if(key in newObj) {
        delete newObj[key]
      }
    }
    
    return newObj
  }
}

const removeBy = (...propVal) => {
  if(!propVal) return
  return (fromObj) => {
    if(typeof fromObj !== 'object' || fromObj === null) return
    
    let newObj = {}
    const newSet = new Set(propVal)
    for(const [key] of Object.entries(fromObj)) {
      if(!newSet.has(fromObj[key])) {
        newObj[key] = fromObj[key]
      }
    }
    
    return newObj
  }
}

export {
  remove,
  removeBy
}
