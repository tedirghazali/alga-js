export const reading = (textArg: string = '', wpmArg: number = 250, typeArg: string = 'minute'): number => {
  const words = textArg.split(' ').length
  let readingTime = Number(words) / Number(wpmArg)
  
  if(typeArg === 'second') {
    readingTime = Number(readingTime) * 60
  } else if(typeArg === 'millisecond') {
    readingTime = Number(readingTime) * 60000
  }

  return Math.ceil(readingTime)
}
