import { uniq } from './uniqArray'

export const search = (fromArrayay: any[], ...searchString): any[] => {
  let newArray: any[] = []
  for(let searchItem of searchString.flat()) {
    const filterArray = Array.from(fromArrayay).filter((item: any) => {
      if(isNaN(item) === false && Number(item) === Number(searchItem)) {
        return true
      } else if(typeof item === 'string' && String(item).toLowerCase().includes(String(searchItem).toLowerCase())) {
        return true
      } else if(typeof item === 'object' && item !== null) {
        for(const key of Object.keys(item)) {
          if(isNaN(item[key]) === false && Number(item[key]) === Number(searchItem)) {
            return true
          } else if(typeof item[key] === 'string' && String(item[key]).toLowerCase().includes(String(searchItem).toLowerCase())) {
            return true
          }
        }
      }
      return false
    })
    newArray = uniq([...newArray, ...filterArray])
  }
    
  return newArray
}

export const searchBy = (fromArray: any[], queryArray: any[], propArray: string[]): any[] => {
  let newArray = []
  for(let query of queryArray) {
    const filterArray = Array.from(fromArray).filter((item: any) => {
      for(const val of Array.from(propArray)) {
        if(val in item) {
          if(isNaN(item[val]) === false && Number(item[val]) === Number(query)) {
            return true
          } else if(typeof item[val] === 'string' && String(item[val]).toLowerCase().indexOf(String(query).toLowerCase()) !== -1) {
            return true
          }
        }
      }
      return false
    })
    newArray = uniq([...newArray, ...filterArray])
  }
    
  return newArray
}
