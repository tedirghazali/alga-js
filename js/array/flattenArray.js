const flatten = (nestArr, options = {id: 'id', parent: 'parent', children: 'children'}) => {
  const flattenArray = []
  
  const parentArray = () => {
    const nestedArray = Array.from(nestArr)
    nestedArray.forEach(item => {
      const newObject = item
      newObject[options.parent] = '0'
      if(typeof newObject[options.children] === 'object' && Array.isArray(newObject[options.children])) {
        childrenArray(newObject[options.children], item)
        delete newObject[options.children]
      }
      flattenArray.push(newObject)
    })
  }
  
  const childrenArray = (childArr, parentObj) => {
    if(childArr.length >= 1) {
      const nestedArray = Array.from(childArr)
      nestedArray.forEach(item => {
        const newObject = item
        newObject[options.parent] = parentObj[options.id]
        if(typeof newObject[options.children] === 'object' && Array.isArray(newObject[options.children])) {
          childrenArray(options.children, item)
          delete newObject[options.children]
        }
        flattenArray.push(newObject)
      })
    }
  }
  
  parentArray()
  
  return flattenArray
}

export {
  flatten
}
