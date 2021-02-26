const avg = (oriArr, byObj = null) => {
  if(typeof oriArr !== 'object') return
  
  const arrayOrigin = Array.from(oriArr)
  let resNum = 0
  
  if(typeof byObj === 'string') {
    for(const ao of arrayOrigin) {
      if(byObj in ao) {
        resNum += Number(ao[byObj])
      }
    }
  } else {
    for(const ao of arrayOrigin) {
      resNum += Number(ao)
    }
  }
  
  const avgNum = resNum / arrayOrigin.length
  return Number(avgNum.toFixed(0))
}

export {
  avg
}
