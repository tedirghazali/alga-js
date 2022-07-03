export const paginate = (fromArray: any[], pageActive: number = 1, limitPerPage: number = 10): any[] => {
  const newArray: any[] = Array.from(fromArray)
  const startPaginate: number = (Number(limitPerPage) * Number(pageActive)) - (Number(limitPerPage) - 1)
  const endPaginate: number = Number(limitPerPage) * Number(pageActive)
    
  return newArray.slice(startPaginate - 1, (endPaginate <= newArray.length) ? endPaginate : newArray.length)
}

export const pages = (lengthOfArray: any[] | number, limitPerPage: number = 10): number => {
  const arrayLength: number = Array.isArray(lengthOfArray) ? lengthOfArray.length : lengthOfArray
  const divideLength: number = Number(arrayLength) / Number(limitPerPage)
  
  const pageNumber: number = Math.ceil(divideLength)
  return pageNumber
}

export const pageInfo = (fromArray: any[], pageActive: number = 1, limitPerPage: number = 10): any => {
  const newArray: any[] = Array.from(fromArray)
  const startPaginate: number = (Number(limitPerPage) * Number(pageActive)) - (Number(limitPerPage) - 1)
  const endPaginate: number = Number(limitPerPage) * Number(pageActive)
    
  return { 
    from: (newArray.length >= 1) ? startPaginate : 0,
    start: (newArray.length >= 1) ? startPaginate : 0,
    to: (endPaginate <= newArray.length) ? endPaginate : newArray.length,
    end: (endPaginate <= newArray.length) ? endPaginate : newArray.length,
    of: newArray.length,
    length: newArray.length
  }
}

export const pagination = (totalPages: number, pageActive: number = 1, positionOfEllipsis: number = 0) => {
  const newArray: string[] = []
  const maxPages: number = (Number(totalPages) < Number(pageActive)) ? Number(totalPages) : Number(pageActive)
  const minPages: number = (Number(pageActive) < 1) ? 1 : Number(pageActive)
  const pageAddition: number = maxPages + Number(positionOfEllipsis)
  const pageSubtraction: number = minPages - Number(positionOfEllipsis)
  if(Number(positionOfEllipsis) === 0) {
    for(let i = 1; i <= Number(totalPages); i++) {
      newArray.push(String(i))
    }
  } else {
    if(minPages > 1) {
      for(let i = pageSubtraction; i < minPages; i++) {
        newArray.push(String(i))
      }
    }
  
    for(let i = maxPages; i <= pageAddition; i++) {
      newArray.push(String(i))
    }
  }
  const filterNegative: string[] = newArray.filter(num => Number(num) > 0)
  const filterMax: string[] = filterNegative.filter(num => Number(num) <= Number(totalPages))
  if(pageAddition < Number(totalPages) && Number(positionOfEllipsis) !== 0) {
    filterMax.push('...')
  }
  if(pageSubtraction > 1 && Number(positionOfEllipsis) !== 0) {
    filterMax.unshift('...')
  }
    
  return filterMax
}
