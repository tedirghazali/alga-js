export const isObject = (objArg) => {
  return (typeof objArg === 'object' && objArg !== null && Object.prototype.toString.call(objArg) === "[object Object]") ? true : false
}
