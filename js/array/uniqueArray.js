const unique = (oriArr, byProp = null) => {
  if(typeof oriArr !== 'object') return
  
  const oriArray = Array.from(oriArr)
  let newArray = []
  
  if(typeof byProp === 'string') {
    let newSet = new Set()
    for(const oriItem of oriArray) {
      if(!newSet.has(oriItem[byProp])) {
        newSet.add(oriItem[byProp])
      }
    }
    newArray = [...newSet]
  } else {
    let newSet = new Set()
    for(const oriItem of oriArray) {
      if(!newSet.has(oriItem)) {
        newSet.add(oriItem)
      }
    }
    newArray = [...newSet]
  }
  
  return newArray
}

export {
  unique
}
