const index = (indexArr, options = { key: 'id', value: 0}) => {
  const indexedArray = Array.from(indexArr)
  let resultNum = -1
  if('key' in options && 'value' in options) {
    resultNum = (indexedArray.length >= 1) ? indexedArray.findIndex(obj => obj[options.key] === options.value) : -1
  } else {
    if(indexedArray.length >= 1) {
      resultNum = indexedArray.findIndex(obj => {
        for(const [key, val] of Object.entries(options)) {
          if(key in obj && obj[key] === val) {
            return true
          }
        }
      })
    }
  }
  
  return resultNum
}

export {
  index
}
