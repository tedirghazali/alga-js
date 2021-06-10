export const includes = (valueArr, searchStr, position = 0) => {
  return (valueArr.indexOf(searchStr, position) !== -1) ? true : false
}
