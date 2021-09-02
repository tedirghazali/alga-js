import { isArray } from './isArray.js'
import { isNumber } from '../number/isNumber.js'

export const paginate = (fromArr, pageActive = 1, limitPerPage = 10) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array')
  }
  if(!isNumber(pageActive)) {
    throw new Error('This is the page active number, please enter number only')
  }
  if(!isNumber(limitPerPage)) {
    throw new Error('This is the limit of entries in one page in a number, please enter number only')
  }
    
  const newArr = Array.from(fromArr)
  const startPaginate = (Number(limitPerPage) * Number(pageActive)) - (Number(limitPerPage) - 1)
  const endPaginate = Number(limitPerPage) * Number(pageActive)
    
  return newArr.slice(startPaginate - 1, (endPaginate <= newArr.length) ? endPaginate : newArr.length)
}

export const pages = (fromArr, limitPerPage = 10) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array')
  }
  if(!isNumber(limitPerPage)) {
    throw new Error('This is the limit of entries in one page in a number, please enter number only')
  }
  
  const newArr = Array.from(fromArr)
  const divideLength = newArr.length / Number(limitPerPage)
  
  const pageNumber = Math.ceil(divideLength) //(pageNumber === Number(limitPerPage)) ? 1 : pageNumber
  return pageNumber
}

export const pageInfo = (fromArr, pageActive = 1, limitPerPage = 10) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array')
  }
  if(!isNumber(pageActive)) {
    throw new Error('This is the page active number, please enter number only')
  }
  if(!isNumber(limitPerPage)) {
    throw new Error('This is the limit of entries in one page in a number, please enter number only')
  }
  
  const newArr = Array.from(fromArr)
  const startPaginate = (Number(limitPerPage) * Number(pageActive)) - (Number(limitPerPage) - 1)
  const endPaginate = Number(limitPerPage) * Number(pageActive)
    
  return { from: startPaginate, to: (endPaginate <= newArr.length) ? endPaginate : newArr.length, of: newArr.length}
}

export const pagination = (totalPages, pageActive = 1, positionOfEllipsis = 0) => {
  if(!isNumber(totalPages)) {
    throw new Error('This is the total or all pages in numbers, please enter number only')
  }
  if(!isNumber(pageActive)) {
    throw new Error('This is the page active number, please enter number only')
  }
  if(!isNumber(positionOfEllipsis)) {
    throw new Error('This is the position of ellipsis [...], please enter number only')
  }
  
  const newArray = []
  const maxPages = (Number(totalPages) < Number(pageActive)) ? Number(totalPages) : Number(pageActive)
  const minPages = (Number(pageActive) < 1) ? 1 : Number(pageActive)
  const pageAddition = maxPages + Number(positionOfEllipsis)
  const pageSubtraction = minPages - Number(positionOfEllipsis)
  if(Number(positionOfEllipsis) === 0) {
    for(let i = 1; i <= Number(totalPages); i++) {
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
  const filterMax = filterNegative.filter(num => num <= Number(totalPages))
  if(pageAddition < Number(totalPages) && Number(positionOfEllipsis) !== 0) {
    filterMax.push('...')
  }
  if(pageSubtraction > 1 && Number(positionOfEllipsis) !== 0) {
    filterMax.unshift('...')
  }
    
  return filterMax
}
