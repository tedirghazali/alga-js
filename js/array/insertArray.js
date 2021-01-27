const errorMsg = 'You have to enter the value before using this insert array utility'
 
const insert = (value, to = [], at = 'last', index = NaN) => {
  if(!value) return throw Error(errorMsg)
  const toArr = Array.from(to)
  if(at === 'first') {
    toArr.unshift(value)
  } else if(at === 'last') {
    toArr.push(value)
  } else if(at === 'before') {
    const indBe = (isNaN(index)) ? 1 : index;
    toArr.splice(Number(indBe) - 1, 0, value)
  } else if(at === 'after') {
    const indAf = (isNaN(index)) ? 0 : index;
    toArr.splice(Number(indAf) + 1, 0, value)
  }
  return toArr
}
  
const insertArray = (from, to = [], at = 'last', index = NaN) => {
  if(!from) return throw Error(errorMsg)
  let toArr = Array.from(to)
  if(at === 'first') {
    toArr = [...from, ...toArr]
  } else if(at === 'last') {
    toArr = [...toArr, ...from]
  } else if(at === 'before') {
    const indBe = (isNaN(index)) ? 1 : index;
    toArr.splice(Number(indBe) - 1, 0, from);
    toArr = toArr.flat()
  } else if(at === 'after') {
    const indAf = (isNaN(index)) ? 0 : index;
    toArr.splice(Number(indAf) + 1, 0, from);
    toArr = toArr.flat()
  }
  return toArr
}

const insertObject = (from, to = [], where = '', at = 'after') => {
  if(!from) return throw Error(errorMsg)
  let toArr = Array.from(to)
  if(where !== '') {
    const index = toArr.findIndex((item) => item[where])
    if(at === 'before') {
      const indBe = (index <= -1) ? 1 : index;
      toArr.splice(Number(indBe) - 1, 0, from);
    } else if(at === 'after') {
      const indAf = (index <= -1) ? 0 : index;
      toArr.splice(Number(indAf) + 1, 0, from);
    }
  }
  return toArr
}

export {
  insert,
  insertArray,
  insertObject
}
