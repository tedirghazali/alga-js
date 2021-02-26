const min = (oriArr, byObj = null) => {
  if(typeof oriArr !== 'object') return
  
  const arrayOrigin = Array.from(oriArr)
  let resNum = 0
  
  if(typeof byObj === 'string') {
    for(const ao of arrayOrigin) {
      if(byObj in ao) {
        if(Number(ao[byObj]) >= resNum) {
          resNum = Number(ao[byObj])
        }
      }
    }
    for(const ao of arrayOrigin) {
      if(byObj in ao) {
        if(Number(ao[byObj]) <= resNum) {
          resNum = Number(ao[byObj])
        }
      }
    }
  } else {
    for(const ao of arrayOrigin) {
      if(Number(ao) >= resNum) {
        resNum = Number(ao)
      }
    }
    for(const ao of arrayOrigin) {
      if(Number(ao) <= resNum) {
        resNum = Number(ao)
      }
    }
  }
  
  return resNum
}

export {
  min
}
