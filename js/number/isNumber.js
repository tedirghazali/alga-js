export const isNumber = (numArg) => {
  return (typeof numArg === 'number' || !isNaN(numArg))? true : false
}

export const isPositive = (numArg) => {
  if(typeof numArg !== 'number' && typeof numArg !== 'string') {
    throw new Error('You must input only number format here')
  }
  return (Math.sign(numArg) === 1)? true : false
}

export const isNegative = (numArg) => {
  if(typeof numArg !== 'number' && typeof numArg !== 'string') {
    throw new Error('You must input only number format here')
  }
  return (Math.sign(numArg) === -1)? true : false
}
