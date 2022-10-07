export const remove = (fromObject: any, ...propKey): any => {
  const newObject: any = Object.assign({}, fromObject)
  for(const key of propKey) {
    if(key in newObject) {
      delete newObject[key]
    }
  }
    
  return newObject
}

export const removeBy = (fromObject: any, ...propVal): any => {
  const newObject: any = {}
  const newSet = new Set(propVal.map((i: any | any[]) => String(i)))
  for(const key of Object.keys(fromObject)) {
    if(!newSet.has(String(fromObject[key]))) {
      newObject[key] = fromObject[key]
    }
  }
    
  return newObject
}

export const removeByKey = remove

export const removeByVal = removeBy
