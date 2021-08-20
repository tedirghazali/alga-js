export const random = (size = 11, type = 'long') => {
  let output = ''
  let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?'
  if(type === 'short' || type === 'alphadash') {
    characters = characters.slice(0, 64)
  } else if(type === 'narrow' || type === 'alphanumeric') {
    characters = characters.slice(0, 62)
  } else if(type === 'alpha') {
    characters = characters.slice(10, 62)
  } else if(type === 'hex') {
    characters = characters.slice(0, 16)
  } else if(type === 'number' || type === 'numeric') {
    characters = characters.slice(0, 10)
  }
  for(let i = 0; i < size; i++) {
    output += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return output
}
