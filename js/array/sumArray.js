const sum = (oriArr, byObj = null) => {
  if(typeof oriArr !== 'object') return
  
  const originalArray = Array.from(oriArr)
  let sumNum = 0
  if(typeof byObj === 'string') {
    const objArray = []
    for(const oa of originalArray) {
      if(byObj in oa) {
        objArray.push(oa[byObj])
      }
    }
    for(const ba of objArray) {
      sumNum += Number(ba)
    }
  } else {
    for(const oa2 of originalArray) {
      sumNum += Number(oa2)
    }
  }
  return sumNum
}

export {
  sum
}
