export const includes = (valueStr, searchStr, position = 0) => {
  return (valueStr.indexOf(searchStr, position) !== -1) ? true : false
}
