export const random = (size: number = 11, type: string = ''): string => {
  let randomString: string = ''
  let characters: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?'
  
  if(type === 'alphadash') {
    characters = characters.slice(0, 64)
  } else if(type === 'alphanumeric') {
    characters = characters.slice(0, 62)
  } else if(type === 'alpha') {
    characters = characters.slice(10, 62)
  } else if(type === 'hex') {
    characters = characters.slice(0, 16)
  } else if(type === 'numeric') {
    characters = characters.slice(0, 10)
  }
  
  for(let i = 0; i < size; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  
  return randomString
}
