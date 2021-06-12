import { isArray } from './isArray.js'
import { isNumber } from '../number/isNumber.js'

class Insert {
	constructor(valArr, toArr) {
    this.valArr = valArr
    this.toArr = toArr
  }
  
  first() {
    return [...this.valArr, ...this.toArr]  // unshift(value)
  }
  
  last() {
    return [...this.toArr, ...this.valArr] // push(value)
  }
    
  before(index) {
    const indexBefore = (isNaN(index)) ? 1 : index;
    this.toArr.splice(Number(indexBefore) - 1, 0, this.valArr);
    return this.toArr.flat()
  }
  
  after(index) {
    const indexAfter = (isNaN(index)) ? 0 : index;
    this.toArr.splice(Number(indexAfter) + 1, 0, this.valArr);
    return this.toArr.flat()
  }
}

export const insert = (...value) => {
  if(value.length < 1) {
    throw new Error('You have to enter at least one value')
  }
  
  const to = (toArr, toPosition = null, atIndex = null) => {
    if(!isArray(toArr)) {
      throw new Error('Only array accept here')
    }
    
    const arrVal = Array.from(toArr)
    let resArr = new Insert(value, arrVal)
    
    if(toPosition === 'first') {
      resArr = resArr.first()
    } else if(toPosition === 'last') {
      resArr = resArr.last()
    } else if(toPosition === 'before') {
      resArr = resArr.before(atIndex)
    } else if(toPosition === 'after') {
      resArr = resArr.after(atIndex)
    }
    
    return resArr
  }
  
  return to
}

export const insertBefore = (...value) => {
  if(value.length < 1) {
    throw new Error('You have to enter at least one value')
  }
  
  return (toArr, atIndex) => {
    if(!isArray(toArr)) {
      throw new Error('In the first argument, here only accept array type')
    }
    if(!isNumber(atIndex)) {
      throw new Error('In the second argument, accept only numeric or number type')
    }
    
    const toArray = Array.from(toArr)
    //return new Insert(value, toArray).before(atIndex)
    
    const indexBefore = (isNaN(atIndex)) ? 1 : atIndex;
    toArray.splice(Number(indexBefore) - 1, 0, value);
    return toArray.flat()
  }
}

export const insertAfter = (...value) => {
  if(value.length < 1) {
    throw new Error('You have to enter at least one value')
  }
  
  return (toArr, atIndex) => {
    if(!isArray(toArr)) {
      throw new Error('In the first argument, here only accept array type')
    }
    if(!isNumber(atIndex)) {
      throw new Error('In the second argument, accept only numeric or number type')
    }
    
    const toArray = Array.from(toArr)
    //return new Insert(value, toArray).after(atIndex)
    
    const indexAfter = (isNaN(atIndex)) ? 0 : atIndex;
    toArray.splice(Number(indexAfter) + 1, 0, value);
    return toArray.flat()
  }
}
