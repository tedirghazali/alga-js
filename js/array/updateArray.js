const update = (setObj) => {
  if(typeof setObj !== 'object') return
  return (oriArr, whereObj) => {
    if(typeof oriArr !== 'object' && typeof whereObj !== 'object') return
    
    const filteredArray = Array.from(oriArr).filter(obj => {
      for(const [key, val] of Object.entries(obj)) {
        if(val === whereObj[key]) {
          return true
        }
      }
      return false
    })
    return filteredArray
  }
}

export {
  update
}
