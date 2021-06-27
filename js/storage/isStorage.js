export const isStorage = (storageType) => {
  return (typeof window === 'object' && `${storageType}Storage` in window) ? true : false
}

export const isCookie = () => {
  return (typeof document === 'object' && 'cookie' in document) ? true : false
}
