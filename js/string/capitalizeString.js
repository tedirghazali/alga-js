const capitalize = (str, opt = 'single') => {
  if(typeof str !== 'string') return
  let capStr = str
  if(opt === 'multiple') {
    capStr = capStr.trim().replace(/^\w/, (c) => c.toUpperCase())
  ) else {
    capStr = capStr.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
  }
  return capStr
}

export {
  capitalize
}
