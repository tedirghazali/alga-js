export const move = (fromArray: any[], currentIndex: Number = 0, propName: string = '', moveType: string = 'up'): Array<any> => {
  let resArr: any[] = Array.from(fromArray)
  
  if(resArr.length >= 1 && propName !== '') {
    const startIndex: Number = 0
    const endIndex: Number = Number(resArr.length) - 1
    if(moveType === 'down') {
      const nextIndex: Number = Number(currentIndex) >= Number(endIndex) ? 0 : (Number(currentIndex) + 1)
      const currentItem: any = resArr[String(currentIndex)]
      const nextItem: any = resArr[String(nextIndex)]
      resArr = resArr.map((item: any, index: Number) => {
        if(Number(currentIndex) === Number(index)) {
          item = nextItem
        }
        if(Number(nextIndex) === Number(index)) {
          item = currentItem
        }
        item[propName] = Number(index) + 1
        return item
      })
    } else {
      const prevIndex: Number = Number(currentIndex) <= Number(startIndex) ? Number(endIndex) : (Number(currentIndex) - 1)
      const currentItem: any = resArr[String(currentIndex)]
      const prevItem: any = resArr[String(prevIndex)]
      resArr = resArr.map((item: any, index: Number) => {
        if(Number(currentIndex) === Number(index)) {
          item = prevItem
        }
        if(Number(prevIndex) === Number(index)) {
          item = currentItem
        }
        item[propName] = Number(index) + 1
        return item
      })
    }
  }
  
  return resArr
}
