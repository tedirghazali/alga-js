// Fisher-Yates or Durstenfeld shuffle

export const shuffle = (arr: any[]) => {
  // Define all the variables that we need
  let newArr: any[] = arr
  let len: number = arr.length
  let ind: number = 0
  
  // Loop it using while for getting the randomize index (for loop is not good for this)
  while(len >= 1) {
    //@ts-ignore
    ind = Math.floor(Math.random() * len)
    // Decrease the len value for getting the current index
    len--
    
    // Swap the value of the current index of new array with the randomize one and vice versa
    [newArr[len], newArr[ind]] = [newArr[ind], newArr[len]]
  }
  
  // Make sure it return a new array (immutable value)
  return newArr
}
