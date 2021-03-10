import { index } from './indexArray.js'

const destroy = (...whereOpt) => {
  if(!whereOpt) return
  
  return (oriArr) => {
    if(typeof oriArr !== 'object') return
    
    let oriArray = Array.from(oriArr)
    let newArray = []
    for(const opt of whereOpt) {
      if(typeof opt === 'string' && opt === 'first') {
        oriArray = oriArray.map((obj, ind) => {
          if(ind === 0) {
            return null
          } else {
            return obj
          }
        })
        newArray = oriArray
      } else if(typeof opt === 'string' && opt === 'last') {
        oriArray = oriArray.map((obj, ind) => {
          if(ind === (oriArray.length - 1)) {
            return null
          } else {
            return obj
          }
        })
        newArray = oriArray
      } else if(typeof opt === 'number') {
        oriArray = oriArray.map((obj, ind) => {
          if(ind === opt) {
            return null
          } else {
            return obj
          }
        })
        newArray = oriArray
      } else if(typeof opt === 'object' && opt !== null) {
        const indx = index(oriArray, opt)
        oriArray = oriArray.map((obj, ind) => {
          if(ind === indx) {
            return null
          } else {
            return obj
          }
        })
        newArray = oriArray
      }
    }
    return newArray.filter(obj => obj !== null)
  }
}

export {
  destroy
}
