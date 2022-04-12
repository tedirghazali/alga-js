export const take = (fromArray: any[], byProp: string | number | ((item: any) => boolean), cbProp: string | number = ''): any[] => {
  let newArray: any[] = []
  const byNumber: number = Number(byProp)
  if(Array.isArray(fromArray) && fromArray.length >= 1) {
    if(typeof fromArray[0] === 'object' && fromArray[0] !== null && typeof byProp === 'string' && Object.keys(fromArray[0]).includes(byProp)) {
      newArray = fromArray.map((item: any) => {
        return item[byProp]
      })
      if(cbProp === 'uniq') {
        newArray = Array.from(new Set(newArray))
      }
    } else if(Array.isArray(fromArray[0]) && isNaN(byNumber) === false) {
      newArray = fromArray.map((item: any[]) => {
        return item[byNumber]
      })
      if(cbProp === 'uniq') {
        newArray = Array.from(new Set(newArray))
      }
    } else if(typeof byProp === 'function') {
      newArray = fromArray.filter((item: any | any[]) => {
        return byProp(item)
      })
      if(cbProp !== '') {
        newArray = newArray.map((item: any | any[]) => item[cbProp])
      }
    }
  }
  return newArray
}
