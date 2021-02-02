const nested = (flatArr, options = {id: 'id', parent: 'parent', children: 'children'}) => {
  const nestedArray = []
  const flattenArray = Array.from(flatArr)
  
  const parentArray = (flattenArr) => {
    flattenArr.forEach(item => {
      if(typeof item[options.parent] === 'string' && item[options.parent] === '0') {
        nestedArray.push(createNewObject(item))
      } else if(typeof item[options.parent] === 'number' && item[options.parent] === 0) {
        nestedArray.push(createNewObject(item))
      }
    })
  }
  
  const createNewObject = (itemObj) => {
    const newObject = itemObj
    if(itemObj[options.children] === undefined || itemObj[options.children] === null) {
      newObject[options.children] = childrenArray(itemObj[options.id])
      if(newObject[options.children].length <= 0) {
        delete newObject[options.children]
      }
    }
    delete newObject[options.parent]
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
