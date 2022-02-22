interface CallBack<Type> {
  (a: Type, b: Type): number;
}

export const sort = (fromArray: any[], sortString: string = 'asc'): any[] => {
  const newArray: any[] = Array.from(fromArray)
  if(sortString === 'asc') {
    newArray.sort((a: any, b: any) => {
      if(isNaN(a) === false && isNaN(b) === false) {
        return Number(a) - Number(b)
      } else if(typeof a === 'string' && typeof b === 'string') {
        const propA: string = a.toLowerCase()
        const propB: string = b.toLowerCase()
        let propRes: number = 0
          
        if(propA < propB) {
          propRes = -1
        } else if(propA > propB) {
          propRes = 1
        }
        return propRes
      }
    })
  } else if(sortString === 'desc') {
    newArray.sort((a: any, b: any) => {
      if(isNaN(a) === false && isNaN(b) === false) {
        return Number(b) - Number(a)
      } else if(typeof a === 'string' && typeof b === 'string') {
        const propA: string = a.toLowerCase()
        const propB: string = b.toLowerCase()
        let propRes: number = 0
          
        if(propB < propA) {
          propRes = -1
        } else if(propB > propA) {
          propRes = 1
        }
        return propRes
      }
    })
  }
  return newArray
}

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

export const sortWith = (fromArray: any[], compareFunc: CallBack<any>): any[] => {
  const newArray = Array.from(fromArray)
  newArray.sort((a: any, b: any) => {
    let res = 0
    if(Math.sign(compareFunc(a, b)) === -1) {
      res = -1
    } else {
      res = 1
    }
    return res;
  })
  return newArray
}
