export const clone = (...restArg) => {
  if(restArg.length < 1) {
    throw new Error('In this argument must have at least one argument and please provide it in object type')
  }
  return Object.assign({}, ...restArg)
}
