export const debounce = (callback, delay = 300) => {
  if(typeof callback !== 'function') {
    throw new Error('Callback must be function')
  }

  let timeout
  return (...args) => {
    if(timeout !== undefined || timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => { 
      callback(...args) 
    }, delay)
  }
}
