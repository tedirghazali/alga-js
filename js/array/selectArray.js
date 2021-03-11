const select = (...selProp) => {
  if(!selProp) return
  
  return (fromArr) => {
    if(typeof fromArr !== 'object') return
    
    const fromArray = Array.from(fromArr)
    let newArray = []
    for(const obj of fromArray) {
      let newObject = {}
      selProp.forEach(sel => {
        if(sel in obj) {
          newObject[sel] = obj[sel]
        }
      })
      newArray.push(newObject)
    }
    
    return newArray
  }
}

const hidden = (...selProp) => {
  if(!selProp) return
  
  return (fromArr) => {
    if(typeof fromArr !== 'object') return
    
    const fromArray = Array.from(fromArr)
    let newArray = []
    for(const obj of fromArray) {
      let newObject = obj
      selProp.forEach(sel => {
        if(sel in obj) {
          delete newObject[sel]
        }
      })
      newArray.push(newObject)
    }
    
    return newArray
  }
}

export {
  select,
  hidden
}
