export const random = (size = 3) => {
  if(typeof size !== 'number' && size <= 0) {
    throw new Error('You have to add a number at least 1')
  }
  
  let outputNum = ''
  const basicNum = '0123456789' 
  for(let i = 0; i < size; i++) {
    outputNum += basicNum.charAt(Math.floor(Math.random() * basicNum.length))
  }
  return outputNum
}
