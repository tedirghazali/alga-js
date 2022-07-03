export const duplication = (fromArray: any[], prop: string = ''): any => {
  let newArray: any[] = []
  let newArrSet: any[] = Array.from(new Set(fromArray))
  if(prop !== '') {
    newArrSet = Array.from(new Set(fromArray.map((i: any) => i[prop])))
  }
  for(let setItem of newArrSet) {
    const tempArr = Array.from(fromArray).filter((filterItem: any) => {
      if(prop !== '') {
        return filterItem[prop] === setItem
      } else {
        return filterItem === setItem
      }
    })
    if(Number(tempArr.length) >= 2) {
      tempArr.forEach(arrItem => {
        newArray.push(arrItem)
      })
    }
  }
  
  return newArray
}

export const duplicationGroup = (fromArray: any[], prop: string = ''): any => {
  const newObj: any = {}
  const newSet = new Set()
  let newArrSet: any[] = Array.from(new Set(fromArray))
  if(prop !== '') {
    newArrSet = Array.from(new Set(fromArray.map((i: any) => i[prop])))
  }
  for(let setItem of newArrSet) {
    const tempArr = Array.from(fromArray).filter((filterItem: any) => {
      if(prop !== '') {
        return filterItem[prop] === setItem
      } else {
        return filterItem === setItem
      }
    })
    if(!newSet.has(tempArr.length)) {
      newSet.add(tempArr.length)
      newObj[tempArr.length] = []
    }
    tempArr.forEach(arrItem => {
      newObj[tempArr.length].push(arrItem)
    })
  }
  
  return newObj
}
