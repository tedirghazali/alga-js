export const loop = (fromNum, toNum) => {
  if(typeof fromNum !== 'number' & fromNum <= -1) {
    throw new Error('Only accept number here, start from 0')
  }
  if(typeof toNum !== 'number' & toNum <= 0) {
    throw new Error('Only accept number here, start from 1')
  }
  
  const arrNum = []
  while(fromNum <= toNum) {
    arrNum.push(fromNum++)
  }
  return arrNum
}
