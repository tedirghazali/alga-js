export const separator = (value: number | string, separator: string = ',', float: boolean = false, digit: number = 2): string => {
  let locale: string = (separator === '.') ? 'de-DE' : 'en-US'
  let newNumber: string = String(new Intl.NumberFormat(locale).format(Number(value)))
  if(float === true) {
    let takeNumber: string = String(Number(value))
    if(takeNumber.includes('.')) {
      takeNumber = Number(takeNumber).toFixed(digit)
      takeNumber = takeNumber.split('.')[1]
    } else {
      takeNumber = new Array(digit).fill(0).join('')
    }
    // the float separator will be the oposite
    let dotComma: string = (separator === '.') ? ',' : '.'
    newNumber = newNumber.split(dotComma)[0].trim()
    newNumber = newNumber + dotComma + takeNumber
  }
  return newNumber
}
