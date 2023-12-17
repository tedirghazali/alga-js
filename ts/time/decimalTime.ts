import { format } from './formatTime'

export const toDecimal = (value: string, fixed: number = 2, separator: string = ':', msDivider: string = '.') => {
  const minuteDecimal: number = 100 / 60
  const timeArr: string[] = value.trim().split(separator)

  let countDecimal: number = 0
  if(timeArr.length >= 2) {
    countDecimal = Number(timeArr[1]) * Number(minuteDecimal)

    if(timeArr.length >= 3) {
      const secondArr: string[] = String(timeArr[2]).split(msDivider)
      const countSecond = (Number(secondArr[0]) * Number(minuteDecimal)) / 100
      let countMillisecond: number = 0
      if(secondArr.length >= 2) {
        countMillisecond = Number(secondArr[1]) / 1000
      }
      countDecimal = Number(countDecimal) + (Number(countSecond) + Number(countMillisecond))
    }
  }
  
  return (Number(timeArr[0]) + (Number(countDecimal) / 100)).toFixed(fixed)
}

export const fromDecimal = (value: number | string, separator: string = ':', display: number = 2) => {
  const timeArr: string[] = String(value).split('.')

  let countMinute: string = '00'
  if(timeArr.length >= 2) {
    countMinute = (60 * Number('0.'+timeArr[1])).toFixed(2)
    countMinute = countMinute.replace('.', ':')
  }

  return format((timeArr[0] + separator + countMinute), separator, display)
}
