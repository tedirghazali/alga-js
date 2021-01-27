const toggle = (val, arr = []) => {
  const toggleArr = Array.from(arr)
  if(toggleArr.includes(val)) {
    const index = toggleArr.findIndex(el => el === val)
    toggleArr.splice(index, 1)
  } else {
    toggleArr.push(val)
  }
  return toggleArr
}

export {
  toggle
}
