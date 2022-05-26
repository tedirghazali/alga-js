import { removeBy } from '../object/removeObject'

export const filter = (fromArray: any[], filterObject: any): any[] => {
  let newArray: any[] = Array.from(fromArray)
  const clearObject = removeBy(filterObject, '', 0)
  for(let ftrKey of Object.keys(clearObject)) {
    const filterArray = newArray.filter((object: any) => {
      if(ftrKey in object) {
        if(isNaN(object[ftrKey]) === false && Number(object[ftrKey]) === Number(clearObject[ftrKey])) {
          return true
        } else if(typeof object[ftrKey] === 'string' && String(object[ftrKey]).toLowerCase().includes(String(clearObject[ftrKey]).toLowerCase())) {
          return true
        }
      }
      return false
    })
    newArray = filterArray
  }
    
  return newArray
}
