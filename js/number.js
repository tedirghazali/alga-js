const random = (size = 3) => {
  let outputNum = ''
  const basicNum = '0123456789' 
  for(let i = 0; i < size; i++) {
    outputNum += basicNum.charAt(Math.floor(Math.random() * basicNum.length))
  }
  return outputNum
}

export default {
  random
}
