const merge = (...obj) => {
  if(!obj) return
  
  let newObj = {}
  let newMap = new Map()
  for(const prop of obj) {
    for(const [key, val] of Object.entries(prop)) {
      if(!newMap.has(key)) {
        newMap.set(key, val)
        newObj[key] = val
      }
    }
  }
  
  return newObj
}

const replace = (...obj) => {
  if(!obj) return
  
  let newObj = {}
  for(const prop of obj) {
    for(const [key, val] of Object.entries(prop)) {
      newObj[key] = val
    }
  }
  
  return newObj
}

export {
  merge,
  replace
}
