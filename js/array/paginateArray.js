const paginate = (oriArr) => {
  if(typeof oriArr !== 'object') return
  
  return (pageNum, showNum) => {
    if(typeof pageNum !== 'number') return
    if(typeof showNum !== 'number') return
    
    const oriArray = Array.from(oriArr)
    const startPaginate = (Number(showNum) * Number(pageNum)) - (Number(showNum) - 1)
    const endPaginate = Number(showNum) * Number(pageNum)
    
    return oriArray.slice(startPaginate - 1, (endPaginate <= oriArray.length) ? endPaginate : oriArray.length)
  }
}

const pages = (oriArr, showNum) => {
  if(typeof oriArr !== 'object') return
  if(typeof showNum !== 'number') return
  
  const oriArray = Array.from(oriArr)
  const divideLength = oriArray.length / Number(showNum)
  const splitFloatNum = divideLength.toString().split('.')
  const checkFloatNum = (Number(splitFloatNum[1]) >= 5) ? 0 : 1
  let pageNumber = 0
  if(Number.isInteger(divideLength)) {
    pageNumber = divideLength
  } else {
    pageNumber = Number(Number.parseFloat(divideLength).toFixed(0)) + checkFloatNum
  }
  pageNumber = (pageNumber === Number(showNum)) ? 1 : pageNumber
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

const pagination = (allPages, pageActive = 1, pageLimit = 0) => {
  if(typeof allPages !== 'number') return
  
  const newArray = []
  const maxPages = (Number(allPages) < Number(pageActive)) ? Number(allPages) : Number(pageActive)
  const minPages = (Number(pageActive) < 1) ? 1 : Number(pageActive)
  const pageAddition = maxPages + Number(pageLimit)
  const pageSubtraction = minPages - Number(pageLimit)
  if(Number(pageLimit) === 0) {
    for(let i = 1; i <= Number(allPages); i++) {
      newArray.push(i)
    }
  } else {
    if(minPages > 1) {
      for(let i = pageSubtraction; i < minPages; i++) {
        newArray.push(i)
      }
    }
  
    for(let i = maxPages; i <= pageAddition; i++) {
      newArray.push(i)
    }
  }
  const filterNegative = newArray.filter(num => num > 0)
  const filterMax = filterNegative.filter(num => num <= Number(allPages))
  if(pageAddition < Number(allPages) && Number(pageLimit) !== 0) {
    filterMax.push('...')
  }
  if(pageSubtraction > 1 && Number(pageLimit) !== 0) {
    filterMax.unshift('...')
  }
    
  return filterMax
}

export {
  paginate,
  pages,
  show,
  pagination
}
