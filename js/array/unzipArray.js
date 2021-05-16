import { zip } from './zipArray.js'

export const unzip = (...restArr) => {
  if(restArr.length <= 2) {
    throw new Error('You have to provide at least 2 arguments, both in arrays with the same length')
  }
}
