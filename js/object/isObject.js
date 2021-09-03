export const isObject = (objArg) => {
  return (typeof objArg === 'object' && objArg !== null && Object.prototype.toString.call(objArg) === "[object Object]") ? true : false
}

export const isObjectValues = (objArg) => {
  return (Object.values(objArg).filter(objVal => objVal !== '' && objVal !== 0 && objVal !== {} && objVal !== []).join('')) ? true : false
}
