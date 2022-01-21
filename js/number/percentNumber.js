import { isNumber } from './isNumber.js'
import { isString } from '../string/isString.js'

export percent = (percentArg, numArg) => {
  let pcArg = percentArg
  if(isString(pcArg) && pcArg.endsWith('%')) {
    pcArg = pcArg.slice(0, Number(pcArg.length) - 1)
  }
  if(!isNumber(pcArg) && !isString(pcArg) && isNaN(pcArg) === 'NaN') {
    throw new Error('Percentage number must be in a number or number in string')
  }
  if(!isNumber(numArg) && !isString(numArg) && isNaN(numArg) === 'NaN') {
    throw new Error('The number that need to be calculate must be in a number or number in string')
  }
  return (Number(pcArg) / 100) * Number(numArg)
}
