const index = (indexArr, options = {}) => {
  const indexedArray = Array.from(indexArr)
  const indexedOptions = {}
  indexedOptions.key = options.key || 'id'
  indexedOptions.value = options.value || 0
  return (indexedArray.length >= 1) ? indexedArray.findIndex(obj => obj[indexedOptions.key] === indexedOptions.value) : 0
}

export {
  index
}
