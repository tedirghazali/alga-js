export const separator = (value: number | string, separator: string = ',', float: boolean = false): string => {
  let locale: string = (separator === '.') ? 'de-DE' : 'en-US'
  let index: number = (separator === '.') ? 0 : 1
  let newNumber: string = String(new Intl.NumberFormat(locale, { style: 'currency', currency: 'IDR' }).format(Number(value)))
  newNumber = newNumber.split(/\s/)[index]
  if(float !== true) {
    // separator will be the oposite
    let dotComma: string = (separator === '.') ? ',' : '.'
    newNumber = newNumber.split(dotComma)[0].trim()
  }
  return newNumber
}
