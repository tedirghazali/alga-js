import { format } from './formatTime'

export const toPercentage = (value: string, separator: string = ':') => {
  const minutePercentage: number = 100 / 60
  const timeArr: string[] = value.trim().split(separator)

  let countPercentage: number = 0
  if(timeArr.length >= 2) {
    countPercentage = Number(timeArr[1]) * Number(minutePercentage)
  }
  
  return (Number(timeArr[0]) + (Number(countPercentage) / 100)).toFixed(2)
}

export const fromPercentage = (value: number | string, separator: string = ':', display: number = 3) => {
  const timeArr: string[] = String(value).split('.')

  let countMinute: number = 0
  if(timeArr.length >= 2) {
    countMinute = 60 * Number('0.'+timeArr[1])
  }

  return format((timeArr[0] + separator + countMinute), separator, display)
}
