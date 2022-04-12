export const uniq = (fromArray: any[], byProp: string | number = ''): any[] => {
  const newArray: any[] = []
  const byNumber: number = Number(byProp)
  const newSet = new Set()
  for(let fromItem of fromArray) {
    if(typeof fromItem === 'object' && fromItem !== null && typeof byProp === 'string' && byProp !== '' && Array.isArray(fromItem) === false) {
      if(!newSet.has(fromItem[byProp])) {
        newArray.push(fromItem)
        newSet.add(fromItem[byProp])
      }
    } else if(Array.isArray(fromItem) && isNaN(byNumber) === false && Number(fromItem.length) > Number(byProp)) {
      let newIndex: number = Number(byProp)
      if(!newSet.has(fromItem[newIndex])) {
        newArray.push(fromItem)
        newSet.add(fromItem[newIndex])
      }
    } else {
      if(!newSet.has(JSON.stringify(fromItem))) {
        newArray.push(fromItem)
        newSet.add(JSON.stringify(fromItem))
      }
    }
  }
  return newArray
}
