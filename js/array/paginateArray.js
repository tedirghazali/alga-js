import { isArray } from './isArray.js'
import { isNumber } from '../number/isNumber.js'

export const paginate = (fromArr, pageActive = 1, pageLimit = 10) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array')
  }
  if(!isNumber(pageActive)) {
    throw new Error('This is the page active number, please enter number only')
  }
  if(!isNumber(pageLimit)) {
    throw new Error('This is the limit of entries in one page in a number, please enter number only')
  }
    
  const newArr = Array.from(fromArr)
  const startPaginate = (Number(pageLimit) * Number(pageActive)) - (Number(pageLimit) - 1)
  const endPaginate = Number(pageLimit) * Number(pageActive)
    
  return newArr.slice(startPaginate - 1, (endPaginate <= newArr.length) ? endPaginate : newArr.length)
}

export const pages = (fromArr, pageLimit = 10) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array')
  }
  if(!isNumber(pageLimit)) {
    throw new Error('This is the limit of entries in one page in a number, please enter number only')
  }
  
  const newArr = Array.from(fromArr)
  const divideLength = newArr.length / Number(pageLimit)
  const splitFloatNum = divideLength.toString().split('.')
  const checkFloatNum = (Number(splitFloatNum[1]) >= 5) ? 0 : 1
  let pageNumber = 0
  if(Number.isInteger(divideLength)) {
    pageNumber = divideLength
  } else {
    pageNumber = Number(Number.parseFloat(divideLength).toFixed(0)) + checkFloatNum
  }
  pageNumber = (pageNumber === Number(pageLimit)) ? 1 : pageNumber
  return pageNumber
}

export const pageInfo = (fromArr, pageActive = 1, pageLimit = 10) => {
  if(!isArray(fromArr)) {
    throw new Error('On the first argument, here only accept array')
  }
  if(!isNumber(pageActive)) {
    throw new Error('This is the page active number, please enter number only')
  }
  if(!isNumber(pageLimit)) {
    throw new Error('This is the limit of entries in one page in a number, please enter number only')
  }
  
  const newArr = Array.from(fromArr)
  const startPaginate = (Number(pageLimit) * Number(pageActive)) - (Number(pageLimit) - 1)
  const endPaginate = Number(pageLimit) * Number(pageActive)
    
  return { from: startPaginate, to: (endPaginate <= newArr.length) ? endPaginate : newArr.length, of: newArr.length}
}

export const pagination = (allPages, pageActive = 1, pageLimit = 0) => {
  if(!isNumber(allPages)) {
    throw new Error('This is the total or all pages in numbers, please enter number only')
  }
  if(!isNumber(pageActive)) {
    throw new Error('This is the page active number, please enter number only')
  }
  if(!isNumber(pageLimit)) {
    throw new Error('This is the limit of entries in one page in a number, please enter number only')
  }
  
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
