export default class InsertArray {
  errormsg = 'You have to enter the data in array type'

  constructor(value, array = []) {
    this.value = value
    this.array = array
  }
  
  first() {
    if(Array.isArray(this.array)) {
      return this.array.unshift(this.value)
    } else {
      throw this.errormsg
    }
  }
  
  last() {
    if(Array.isArray(this.array)) {
      return this.array.push(this.value)
    } else {
      throw this.errormsg
    }
  }
  
  before(index = 1) {
    if(Array.isArray(this.array)) {
      return this.array.splice(index - 1, 0, this.value)
    } else {
      throw this.errormsg
    }
  }
  
  after(index = 0) {
    if(Array.isArray(this.array)) {
      return this.array.splice(index + 1, 0, this.value)
    } else {
      throw this.errormsg
    }
  }
  
  multiple(position = 'last', index = 1) {
    if(Array.isArray(this.value) && Array.isArray(this.array)) {
      if(position === 'first') {
        return [...this.value, ...this.array]
      } else if(position === 'last') {
        return [...this.array, ...this.value]
      } else if(position === 'before') {
        const multiBefore = this.array.splice(index - 1, 0, this.value);
        return multiBefore.flat()
      } else if(position === 'after') {
        const multiAfter = this.array.splice(index + 1, 0, this.value);
        return multiAfter.flat()
      }
    } else {
      throw this.errormsg
    }
  }
}
