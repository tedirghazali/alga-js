import { isNumber } from './isNumber.js'
import { isString } from '../string/isString.js'

export const calc = (leftOperand, rightOperand, operator) => {
  if(!isNumber(leftOperand)) {
    throw new Error('This is left operand and must be in number type')
  }
  if(!isNumber(rightOperand)) {
    throw new Error('This is left operand and must be in number type')
  }
  if(!isString(operator)) {
    throw new Error('Operator must be one of these: add, subtract, multiply, divide, reminder or exponent')
  }
  
  let calcNumber = 0
  if(operator === 'add' || operator === 'addition' || operator === 'plus' || operator === '+') {
    calcNumber = Number(leftOperand) + Number(rightOperand)
  } else if(operator === 'subtract' || operator === 'subtraction' || operator === 'minus' || operator === '-') {
    calcNumber = Number(leftOperand) - Number(rightOperand)
  } else if(operator === 'multiply' || operator === 'multiplication' || operator === '×' || operator === '*') {
    calcNumber = Number(leftOperand) * Number(rightOperand)
  } else if(operator === 'divide' || operator === 'division' || operator === '÷' || operator === '/') {
    calcNumber = Number(leftOperand) / Number(rightOperand)
  } else if(operator === 'remainder' || operator === 'modulo' || operator === '%') {
    // remainder/modulo: the left operand must be greater than the right one, the right operand will be calculate first to match the number of the left operand until they the same or below the left number and the left over will be the result, otherwise the left operand as a result if lower than the right operand
    calcNumber = Number(leftOperand) % Number(rightOperand)
  } else if(operator === 'exponent' || operator === 'exponentiation' || operator === '**') {
    calcNumber = Number(leftOperand) ** Number(rightOperand)
  }
  return calcNumber
}
