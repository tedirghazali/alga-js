const split = (str) => {
  const splitString = (start, end = null) => {
    const strArray = []
    if(typeof str === 'string') {
      if(start >= 1) {
        strArray.push(str.slice(0, start))
      }
      if(end !== null) {
        strArray.push(str.slice(start, end))
        strArray.push(str.slice(end))
      } else {
        strArray.push(str.slice(start))
      }
    }
    return strArray
  }
  
  return splitString
}

export {
  split
}
