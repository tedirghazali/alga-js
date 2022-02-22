export const percentage = (curVal: number | string, fromVal: number | string, symbol: boolean = false): string => {
  let resNum: string = String(Math.round(((Number(curVal) / Number(fromVal)) - 1) * 100))
  if(symbol === true) {
    resNum = resNum + '%'
  }
  return resNum
}
