export default function isArray(arg) {
  return (typeof arg === 'object' && arg !== null && Array.isArray(arg)) ? true : false
}
