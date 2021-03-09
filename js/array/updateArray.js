import { index } from './indexArray.js'
import { replace } from '../object/mergeObject.js'

const update = (setObj) => {
  if(typeof setObj !== 'object' && setObj !== null) return
  return (oriArr, whereObj) => {
    if(typeof oriArr !== 'object' && typeof whereObj !== 'object') return
    
    const oriArray = Array.from(oriArr)
    let newArray = []
    const indexNum = index(oriArray, whereObj)
    newArray = oriArray.map((obj, ind) => {
      let resMap = obj
      if(ind === indexNum) {
        resMap = replace(obj, setObj)
      }
      return resMap
    })
    return newArray
  }
}

export {
  update
}
