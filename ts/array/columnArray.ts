export const column = (fromArray: any[], column: number = 2): Array<any[]> => {
  const resArray: Array<any[]> = []
  const lenNumber: number = Math.ceil(Number(Array.from(fromArray).length) / Number(column))
  
  for(let i = 0; i < Number(column); i++) {
    const startNumber = Number(i) * Number(lenNumber)
    const endNumber = (Number(i) + 1) * Number(lenNumber)
    const newArray = Array.from(fromArray).slice(startNumber, endNumber)
    resArray.push(newArray)
  }
  
  return resArray
}
