import * as dateVar from './dateVar.js'

const parse = (dateVal) => {
  let newDate = new Date(dateVal)
  if(typeof dateVal === 'string' && !/Z$/i.test(dateVal)) {
    const d = dateVal.match(dateVar.REGEX_PARSE_DATE)
    if (d) {
      const m = d[2] - 1 || 0
      const ms = (d[7] || '0').substring(0, 3)
      newDate = new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms)
    }
  }
  
  if(typeof dateVal === 'object' && Array.isArray(dateVal)) {
    newDate = new Date(Date.UTC(...dateVal))
  }
  
  return newDate
}

export {
  parse
}
