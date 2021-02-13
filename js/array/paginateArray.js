const paginate = (oriArr) => {
  if(typeof oriArr !== 'object') return
  
  return (pageNum, showNum) => {
    if(typeof pageNum !== 'number') return
    if(typeof showNum !== 'number') return
    
    const newArray = Array.from(oriArr)
    const startPaginate = (Number(showNum) * Number(pageNum)) - (Number(showNum) - 1)
    const endPaginate = Number(showNum) * Number(pageNum)
    
    return newArray.slice(startPaginate - 1, endPaginate)
  }
}

const pages = (oriArr, showNum) => {
  if(typeof oriArr !== 'object') return
  if(typeof showNum !== 'number') return
  
  const oriArray = Array.from(oriArr)
  const divideLength = oriArray.length / Number(showNum)
  let pageNumber = 0
  if(Number.isInteger(divideLength)) {
    pageNumber = divideLength
  } else {
    pageNumber = Number(Number.parseFloat(divideLength).toFixed(0)) + 1
  }
  return pageNumber
}

const show = (oriArr) => {
  if(typeof oriArr !== 'object') return
  
  return (pageNum, showNum) => {
    if(typeof pageNum !== 'number') return
    if(typeof showNum !== 'number') return
    
    const oriArray = Array.from(oriArr)
    const startPaginate = (Number(showNum) * Number(pageNum)) - (Number(showNum) - 1)
    const endPaginate = Number(showNum) * Number(pageNum)
    
    return { from: startPaginate, to: (endPaginate <= oriArray.length) ? endPaginate : oriArray.length, of: oriArray.length}
  }
}

export {
  paginate,
  pages,
  show
}
