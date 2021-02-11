const random = (size = 3, type = 'basic') => {
  let outputChar = ''
  let basicChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'
  if(type === 'hex') {
    basicChar = '0123456789abcdef' 
  } else if(type === 'password') {
    basicChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?'
  }
  for(let i = 0; i < size; i++) {
    outputChar += basicChar.charAt(Math.floor(Math.random() * basicChar.length))
  }
  return outputChar
}

export {
  random
}
