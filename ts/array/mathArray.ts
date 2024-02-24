export const math = (fromArray: any[], mathType = 'max', propName: string = ''): Number => {
  let resNum: Number = 0
  
  if(propName !== '') {
    resNum = Math[mathType](...fromArray.map((it: any) => it[propName]).filter((i: any) => isNaN(i) === false))
  } else {
    resNum = Math[mathType](...fromArray.filter((i: any) => isNaN(i) === false))
  }
  
  return resNum
}
