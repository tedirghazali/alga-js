export const math = (fromArray: any[], mathType = 'max', propName: string = ''): Number => {
  let resNum: Number = 0
  
  if(propName !== '') {
    const newArray: number[] = fromArray.map((it: any) => it[propName]).filter((i: any) => isNaN(i) === false)
    if(newArray.length > 1) {
      resNum = Math[mathType](...newArray)
    }
  } else {
    const newArray: number[] = fromArray.filter((i: any) => isNaN(i) === false)
    if(newArray.length > 1) {
      resNum = Math[mathType](...newArray)
    }
  }
  
  return resNum
}
