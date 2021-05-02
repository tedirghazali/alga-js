import { unique } from './uniqueArray.js'

export const search = (...searchStr) => {
  if(!searchStr) return
  return (fromArr) => {
    if(typeof fromArr !== 'object') return
    
    let filteredArray = []
    searchStr.forEach(searchString => {
      const filterFromArr = Array.from(fromArr).filter(obj => {
        for(const [key, val] of Object.entries(obj)) {
          if(Number(obj[key]) !== 'NaN' && Number(val) === Number(searchString)) {
            return true
          } else if(typeof obj[key] === 'string' && val.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
            return true
          }
        }
        return false
      })
      filteredArray = unique(filteredArray.concat(filterFromArr))
    })
    
    return filteredArray
  }
}

export const searchBy = (...filterStr) => {
  if(!filterStr) return
  return (fromArr, whereArr) => {
    if(typeof fromArr !== 'object') return
    
    let filteredArray = []
    filterStr.forEach(filterString => {
      const filterFromArr = Array.from(fromArr).filter(obj => {
        for(const val of Array.from(whereArr)) {
          if(val in obj) {
            if(Number(obj[val]) !== 'NaN' && Number(obj[val]) === Number(filterString)) {
              return true
            } else if(typeof obj[val] === 'string' && obj[val].toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
              return true
            }
          }
        }
        return false
      })
      filteredArray = unique(filteredArray.concat(filterFromArr))
    })
    
    return filteredArray
  }
}

/*export const find = (...findStr) => {
  
}*/
