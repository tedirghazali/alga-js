import { isFunction } from './isFunc.js'

export const ternary = (cb1, cb2, cb3) => {
  if(!isFunction(cb1) && !isFunction(cb2) && !isFunction(cb3)) {
    throw new Error('All arguments here only accept value in function')
  }
  
  return cb1() ? cb2() : cb3()
}
