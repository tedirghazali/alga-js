export const flatten = (nestArray: any[], options: {prop: string, parent: string, children: string} = {prop: 'id', parent: 'parent', children: 'children'}): any[] => {
  const flattenArray: any[] = []
  const flattenOptions: {prop: string, parent: string, children: string} = options
  
  const parentArray = () => {
    const nestedArray = Array.from(nestArray)
    nestedArray.forEach(item => {
      if(typeof item === 'object' && item !== null) {
        const newObject = item
        newObject[flattenOptions.parent] = '0'
        if(typeof newObject[flattenOptions.children] === 'object' && Array.isArray(newObject[flattenOptions.children])) {
          childrenArray(newObject[flattenOptions.children], item)
          delete newObject[flattenOptions.children]
        }
        flattenArray.push(newObject)
      }
    })
  }
  
  const childrenArray = (childArr: any[], parentObj: any) => {
    if(childArr.length >= 1) {
      const nestedArray = Array.from(childArr)
      nestedArray.forEach(item => {
        if(typeof item === 'object' && item !== null) {
          const newObject = item
          newObject[flattenOptions.parent] = parentObj[flattenOptions.prop]
          if(typeof newObject[flattenOptions.children] === 'object' && Array.isArray(newObject[flattenOptions.children])) {
            childrenArray(newObject[flattenOptions.children], item)
            delete newObject[flattenOptions.children]
          }
          flattenArray.push(newObject)
        }
      })
    }
  }
  
  parentArray()
  
  return flattenArray
}

export const flattenAsync = async (nestPromise: Promise<any[]>, options: any = {}): Promise<any[]> => {
  const nestArray = await Promise.resolve(nestPromise)
  return Promise.resolve(flatten(nestArray, options))
}
