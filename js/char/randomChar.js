export const random = (size = 3, type = 'long') => {
  let output = ''
  let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?'
  if(type === 'short') {
    characters = characters.slice(0, 64)
  } else if(type === 'narrow') {
    characters = characters.slice(0, 36)
  } else if(type === 'hex') {
    characters = characters.slice(0, 16)
  } else if(type === 'number') {
    characters = characters.slice(0, 10)
  }
  for(let i = 0; i < size; i++) {
    output += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return output
}
