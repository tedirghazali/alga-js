export const doubleFormat = (arg: string | number): string => {
  let newStr = String(arg)
  if(newStr.length === 1) {
    newStr = '0' + newStr
  }
  return newStr
}

