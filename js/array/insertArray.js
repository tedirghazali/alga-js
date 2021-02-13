class Insert {
	constructor(valArr, toArr) {
    this.valArr = valArr
    this.toArr = toArr
  }
  
  first() {
    return [...this.valArr, ...this.toArr]  // unshift(value)
  }
  
  last() {
    return [...this.toArr, ...this.valArr] // push(value)
  }
    
  before(index) {
    const indexBefore = (isNaN(index)) ? 1 : index;
    this.toArr.splice(Number(indexBefore) - 1, 0, this.valArr);
    return this.toArr.flat()
  }
  
  after(index) {
    const indexAfter = (isNaN(index)) ? 0 : index;
    this.toArr.splice(Number(indexAfter) + 1, 0, this.valArr);
    return this.toArr.flat()
  }
}

const insert = (...value) => {
  if(!value) return
  
  const to = (toArr) => {
    if(typeof toArr !== 'object') return
    const arrVal = Array.from(toArr)
    
    return new Insert(value, arrVal)
  }
  
  return to
}

export {
  insert
}
