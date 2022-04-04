export const nested = (flatArray: any[], options: {prop: string, parent: string, children: string} = {prop: 'id', parent: 'parent', children: 'children'}): any[] => {
  const nestedArray: any[] = []
  const flattenArray: any[] = Array.from(flatArray)
  const nestedOptions: {prop: string, parent: string, children: string} = options
  
  const parentArray = (flattenArr: any[]) => {
    flattenArr.forEach(item => {
      if(typeof item === 'object' && item !== null) {
        let newObject = null
        if(isNaN(item[nestedOptions.parent]) === false && Number(item[nestedOptions.parent]) === 0) {
          newObject = createNewObject(item)
        }
        if(newObject !== null) {
          nestedArray.push(newObject)
        }
      }
    })
  }
  
  const createNewObject = (itemObj: any): any => {
    const newObject = itemObj
    if(itemObj[nestedOptions.children] === undefined || itemObj[nestedOptions.children] === null) {
      newObject[nestedOptions.children] = childrenArray(itemObj[nestedOptions.prop])
      if(newObject[nestedOptions.children].length <= 0) {
        delete newObject[nestedOptions.children]
      }
    }
    delete newObject[nestedOptions.parent]
    return newObject
  }
  
  const childrenArray = (parent: number): any[] => {
    const childArray = []
    if(filteredArray(parent).length >= 1) {
      filteredArray(parent).forEach(item => {
        childArray.push(createNewObject(item))
      })
    }
    return childArray
  }
  
  const filteredArray = (parent: number): any[] => {
    return flattenArray.filter(item => item[nestedOptions.parent] === parent)
  }
  
  parentArray(flattenArray)
  
  return nestedArray
}

export const nestedAsync = async (flatPromise: Promise<any[]>, options: any = {}): Promise<any[]> => {
  const flatArray = await Promise.resolve(flatPromise)
  return Promise.resolve(nested(flatArray, options))
}
