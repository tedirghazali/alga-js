import { isStorage } from './isStorage.js'

export const setStorage = (key, value, storageType = 'local') => {
  if(!isStorage(storageType)) return
  window[`${storageType}Storage`].setItem(key, value)
}

export const getStorage = (key, storageType = 'local') => {
  if(!isStorage(storageType)) return
  return window[`${storageType}Storage`].getItem(key)
}

export const hasStorage = (key, storageType = 'local') => {
  if(!isStorage(storageType)) return
  return (window[`${storageType}Storage`].getItem(key)) ? true : false
}

export const removeStorage = (key, storageType = 'local') => {
  if(!isStorage(storageType)) return
  if(hasStorage(key, storageType)) {
    window[`${storageType}Storage`].removeItem(key)
  }
}

export const clearStorage = (storageType = 'local') => {
  if(!isStorage(storageType)) return
  window[`${storageType}Storage`].clear()
}
