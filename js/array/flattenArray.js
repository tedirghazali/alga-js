const flatten = (nestArr, options = {}) => {
  const flattenArray = []
  const flattenOptions = {}
  flattenOptions.id = options.id || 'id'
  flattenOptions.parent = options.parent || 'parent'
  flattenOptions.children = options.children || 'children'
  
  const parentArray = () => {
    const nestedArray = Array.from(nestArr)
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
  
  const childrenArray = (childArr, parentObj) => {
    if(childArr.length >= 1) {
      const nestedArray = Array.from(childArr)
      nestedArray.forEach(item => {
        if(typeof item === 'object' && item !== null) {
          const newObject = item
          newObject[flattenOptions.parent] = parentObj[flattenOptions.id]
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

export {
  flatten
}
