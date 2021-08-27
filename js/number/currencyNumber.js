import { isNumber } from './isNumber.js'
import { isString } from '../string/isString.js'
import { isObject } from '../object/isObject.js'

export const currency = (amount, ccy = 'USD', locale = 'en-US', options = {}) => {
  if(!isNumber(amount)) {
    throw new Error('Amount must be in a number type')
  }
  if(!isString(ccy) && ccy.length === 3) {
    throw new Error('Currency code must have at least 3 uppercase character')
  }
  if(!isString(locale)) {
    throw new Error('Locale code must contain 2 languages and 2 country code and separated by dash (-)')
  }
  if(!isObject(options)) {
    throw new Error('Currency options must be in object type')
  }
  return new Intl.NumberFormat(locale, {style: 'currency', currency: ccy.toUpperCase(), ...options}).format(amount)
}
