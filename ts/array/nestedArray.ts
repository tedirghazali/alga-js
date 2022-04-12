export const nested = (flatArray: any[], options: {prop: string, parent: string, children: string} = {prop: 'id', parent: 'parent', children: 'children'}): any[] => {
  let nestedArray: any[] = []
  const flattenArray: any[] = Array.from(flatArray)
  const nestedOptions: {prop: string, parent: string, children: string} = options
  
  const parentArray = (flattenArr: any[]) => {
    nestedArray = flattenArr.filter((item: any) => {
      return typeof item === 'object' && item !== null && !flattenArr.map((i: any) => String(i[nestedOptions.prop]).trim()).includes(String(item[nestedOptions.parent]).trim())
    }).map((item: any) => createNewObject(item))
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
