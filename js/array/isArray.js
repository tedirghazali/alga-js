export const isArray = (arg) => {
  return (typeof arg === 'object' && arg !== null && Array.isArray(arg)) ? true : false
}


export const isSuperset = (oriArr, subArr) => {
  if(!isArray(oriArr) && !isArray(subArr)) {
    throw new Error('The both of arguments must be in arrays')
  }
  
  const set = new Set(oriArr)
  for(let sub of subArr) {
    if(!set.has(sub)) {
      return false
    }
  }
  
  return true
}
