const insert = (...value) => {
  if(!value) return throw new Error('Please insert value at least one value')
  
  const to = (toArr = []) => {
    if(!toArr) return throw new Error('to be able to insert value, you have to add array here')
    const arrVal = Array.from(toArr)
    
    return {
      first: () => {
        return [...value, ...arrVal] // unshift(value)
      },
      last: () => {
        return [...arrVal, ...value] // push(value)
      },
      before: (index) => {
        const indexBefore = (isNaN(index)) ? 1 : index;
        arrVal.splice(Number(indexBefore) - 1, 0, value);
        return arrVal.flat()
      },
      after: (index) => {
        const indexAfter = (isNaN(index)) ? 0 : index;
        arrVal.splice(Number(indexAfter) + 1, 0, value);
        return arrVal.flat()
      }
    }
  }
  
  return to
}

export {
  insert
}
