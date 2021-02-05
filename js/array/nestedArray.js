const nested = (flatArr, options = {}) => {
  const nestedArray = []
  const flattenArray = Array.from(flatArr)
  const nestedOptions = {}
  nestedOptions.id = options.id || 'id'
  nestedOptions.parent = options.parent || 'parent'
  nestedOptions.children = options.children || 'children'
  
  
  const parentArray = (flattenArr) => {
    flattenArr.forEach(item => {
      if(typeof item === 'object' && item !== null) {
        let newObject = null
        if(typeof item[nestedOptions.parent] === 'string' && item[nestedOptions.parent] === '0') {
          newObject = createNewObject(item)
        } else if(typeof item[nestedOptions.parent] === 'number' && item[nestedOptions.parent] === 0) {
          newObject = createNewObject(item)
        }
        if(newObject !== null) {
          nestedArray.push(newObject)
        }
      }
    })
  }
  
  const createNewObject = (itemObj) => {
    const newObject = itemObj
    if(itemObj[nestedOptions.children] === undefined || itemObj[nestedOptions.children] === null) {
      newObject[nestedOptions.children] = childrenArray(itemObj[nestedOptions.id])
      if(newObject[nestedOptions.children].length <= 0) {
        delete newObject[nestedOptions.children]
      }
    }
    delete newObject[nestedOptions.parent]
    return newObject
  }
  
  const childrenArray = (parent) => {
    const childArray = []
    if(filteredArray(parent).length >= 1) {
      filteredArray(parent).forEach(item => {
        childArray.push(createNewObject(item))
      })
    }
    return childArray
  }
  
  const filteredArray = (parent) => {
    return flattenArray.filter(item => item.parent === parent)
  }
  
  parentArray(flattenArray)
  
  return nestedArray
}

export {
  nested
}
