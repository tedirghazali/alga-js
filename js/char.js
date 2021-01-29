const random = (size = 3) => {
  let outputChar = ''
  const basicChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' 
  for(let i = 0; i < size; i++) {
    outputChar += basicChar.charAt(Math.floor(Math.random() * basicChar.length))
  }
  return outputChar
}

export default {
  random
}
