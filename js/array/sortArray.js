import { isArray } from './isArray.js'
import { isString } from '../string/isString.js'
import { isNumber } from '../number/isNumber.js'
import { isFunction } from '../func/isFunc.js'

export const sort = (fromArr, sortStr = 'asc') => {
  if(!isArray(fromArr)) {
    throw new Error('Only array of strings or numbers accepted')
  }
  if(!isString(sortStr)) {
    throw new Error('The second argument must be in a string and a value either "", "asc" or "desc"')
  }
  
  const newArray = Array.from(fromArr)
  if(sortStr === 'asc') {
    newArray.sort((a, b) => {
      if(isNumber(a) && isNumber(b)) {
        return Number(a) - Number(b)
      } else if(isString(a) && isString(b)) {
        const propA = a.toLowerCase()
        const propB = b.toLowerCase()
        let propRes = 0
          
        if(propA < propB) {
          propRes = -1
        } else if(propA > propB) {
          propRes = 1
        }
        return propRes
      }
    })
  } else if(sortStr === 'desc') {
    newArray.sort((a, b) => {
      if(isNumber(a) && isNumber(b)) {
        return Number(b) - Number(a)
      } else if(isString(a) && isString(b)) {
        const propA = a.toLowerCase()
        const propB = b.toLowerCase()
        let propRes = 0
          
        if(propB < propA) {
          propRes = -1
        } else if(propB > propA) {
          propRes = 1
        }
        return propRes
      }
    })
  }
  return newArray
}

export const sortBy = (fromArr, propStr, sortStr = 'asc') => {
  if(!isArray(fromArr)) {
    throw new Error('Only array of objects accepted')
  }
  if(!isString(propStr)) {
    throw new Error('The second argument must be in a string and a value must be object property key or name')
  }
  if(!isString(sortStr)) {
    throw new Error('The third argument must be in a string and a value either "", "asc" or "desc"')
  }
  
  const newArray = Array.from(fromArr)
  if(sortStr === 'asc') {
    newArray.sort((a, b) => {
      if(propStr in a && propStr in b) {
        if(isNumber(a[propStr]) && isNumber(b[propStr])) {
          return Number(a[propStr]) - Number(b[propStr])
        } else if(isString(a[propStr]) && isString(b[propStr])) {
          const propA = a[propStr].toLowerCase()
          const propB = b[propStr].toLowerCase()
          let propRes = 0
          
          if(propA < propB) {
            propRes = -1
          } else if(propA > propB) {
            propRes = 1
          }
          return propRes
        }
      }
    })
  } else if(sortStr === 'desc') {
    newArray.sort((a, b) => {
      if(propStr in a && propStr in b) {
        if(isNumber(a[propStr]) && isNumber(b[propStr])) {
          return Number(b[propStr]) - Number(a[propStr])
        } else if(isString(a[propStr]) && isString(b[propStr])) {
          const propA = a[propStr].toLowerCase()
          const propB = b[propStr].toLowerCase()
          let propRes = 0
          
          if(propB < propA) {
            propRes = -1
          } else if(propB > propA) {
            propRes = 1
          }
          return propRes
        }
      }
    })
  }
  return newArray
}

export const sortWith = (fromArr, compareFunc) => {
  if(!isArray(fromArr)) {
    throw new Error('The first argument must be in an array type')
  }
  if(!isFunction(compareFunc)) {
    throw new Error('The second argument is a compare or callback function')
  }
  
  const fromArray = Array.from(fromArr)
  fromArray.sort((a, b) => {
    let res = 0
    if(Math.sign(compareFunc(a, b)) === -1) {
      res = -1
    } else {
      res = 1
    }
    return res;
  })
  return fromArray
}
