// Taking random number between two numbers
export const between = (minArg: string | number, maxArg: string | number, exclude: boolean = true): number => {
  /* between helper from Alga JS by Tedir Ghazali */
  
  // make sure all the argument numbers are not in string type 
  // and here we will produce a number in between minVal and maxVal
  let minVal: number = exclude ? (Number(minArg) + 1) : Number(minArg)
  let maxVal: number = exclude ? (Number(maxArg) - 1) : Number(maxArg)
  
  // generate random number from 0 to maxVal number
  let randVal = Math.floor(Math.random() * Number(maxVal))
  
  // and check if the randVal is less than minVal, then calculate between minVal and randVal
  if(randVal <= minVal) {
    randVal = Number(minVal) + Number(randVal)
  }
  
  return randVal
}

// Checking is this number in between two numbers
export const isBetween = (numArg: string | number, minArg: string | number, maxArg: string | number): boolean => {
  /* isBetween helper from Alga JS by Tedir Ghazali */
  
  // make sure all the argument numbers are not in string type
  let numVal: number = Number(numArg)
  let minVal: number = Number(minArg)
  let maxVal: number = Number(maxArg)
  
  // the result of this helper will be in boolean type
  let boolVal: boolean = false
  
  // if numVal is above minVal and below maxVal, then return it to true
  if(numVal >= minVal && numVal <= maxVal) {
    boolVal = true
  }
  
  return boolVal
}
