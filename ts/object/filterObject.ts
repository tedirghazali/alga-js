export const filter = (fromObject: any, propKey: string, valArray: boolean = false): any | any[] => {
  let newObject: any | any[] = {}
  let filterObject: any[] = Object.entries(fromObject).filter((item: any[]) => {
    return item[0].includes(propKey)
  })
  newObject = Object.fromEntries(new Map(filterObject))
  
  if(valArray === true) {
    newObject = filterObject.map((item: any[]) => {
      return item[1]
    })
  }
  
  return newObject
}

export const filterBy = (fromObject: any, propVal: string, valArray: boolean = false): any | any[] => {
  let newObject: any | any[] = {}
  let filterObject: any[] = Object.entries(fromObject).filter((item: any[]) => {
    return item[1].includes(propVal)
  })
  newObject = Object.fromEntries(new Map(filterObject))
  
  if(valArray === true) {
    newObject = filterObject.map((item: any[]) => {
      return item[1]
    })
  }
  
  return newObject
}

export const filterByKey = filter

export const filterByVal = filterBy
