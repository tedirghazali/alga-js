/*interface CallBack<Type> {
  (a: Type, b: Type): number;
} compareFunc: CallBack<any>*/

export const sortBy = (fromArray: any[], propString: string, sortString: string = 'asc'): any[] => {
  const newArray: any[] = Array.from(fromArray)
  if(sortString === 'asc') {
    newArray.sort((a: any, b: any) => {
      if(propString in a && propString in b) {
        if(isNaN(a[propString]) === false && isNaN(b[propString]) === false) {
          return Number(a[propString]) - Number(b[propString])
        } else if(typeof a[propString] === 'string' && typeof b[propString] === 'string') {
          const propA: string = a[propString].toLowerCase()
          const propB: string = b[propString].toLowerCase()
          let propRes = 0
          
          if(propA < propB) {
            propRes = -1
          } else if(propA > propB) {
            propRes = 1
          }
          return propRes
        }
      }
    })
  } else if(sortString === 'desc') {
    newArray.sort((a: any, b: any) => {
      if(propString in a && propString in b) {
        if(isNaN(a[propString]) === false && isNaN(b[propString]) === false) {
          return Number(b[propString]) - Number(a[propString])
        } else if(typeof a[propString] === 'string' && typeof b[propString] === 'string') {
          const propA: string = a[propString].toLowerCase()
          const propB: string = b[propString].toLowerCase()
          let propRes = 0
          
          if(propB < propA) {
            propRes = -1
          } else if(propB > propA) {
            propRes = 1
          }
          return propRes
        }
      }
    })
  }
  return newArray
}

export const sort = sortBy

export const order = (fromArray: any[], newProp: string = 'order'): any[] => {
  const newArray = Array.from(fromArray)
  return newArray.map((item: any, index: number) => {
    if(typeof item === 'object' && item !== null) {
      item[newProp] = Number(index) + 1
    }
    return item
  })
}
