export const unit = (value: number, digits: number = 2, type: string = 'normal'): string => {
  let lookup: Array<{id: number, value: number, symbol: string}> = [
    { id: 1, value: 1, symbol: '' },
    { id: 2, value: 1e3, symbol: 'K' },
    { id: 3, value: 1e6, symbol: 'M' },
    { id: 4, value: 1e9, symbol: 'G' },
    { id: 5, value: 1e12, symbol: 'T' },
    { id: 6, value: 1e15, symbol: 'P' },
    { id: 7, value: 1e18, symbol: 'E' },
    { id: 8, value: 1e21, symbol: 'Z' },
    { id: 9, value: 1e24, symbol: 'Y' }
  ]
  if(type !== 'normal') {
    lookup = lookup.map((item: any) => {
      if(type === 'decimal') {
        if(item.id === 2) {
          item.symbol = 'k'
        }
      } else if(type === 'money') {
        if(item.id === 4) {
          item.symbol = 'B'
        }
      } else if(type === 'binary') {
        if(item.id !== 1) {
          item.value = item.value + (24 * (item.id - 1))
          item.symbol = item.symbol + 'i'
        }
      } else if(type === 'byte') {
        if(item.id !== 1) {
          item.value = item.value + (24 * (item.id - 1))
          item.symbol = item.symbol + 'B'
        }
      }
      return item
    })
  }
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let item = lookup.slice().reverse().find((item: any) => {
    return Number(value) >= item.value;
  })
  return item ? (Number(value) / item.value).toFixed(digits).replace(rx, '$1') +''+ item.symbol : '0'
}
