export const capitalize = (str: string, opt: string = ''): string => {
  let capStr: string = str
  if(opt === 'multiple') {
    capStr = capStr.toLowerCase().replace(/\w\S*/g, (w: string) => (w.replace(/^\w/, (c: string) => c.toUpperCase())))
  } else if(opt === 'single') {
    capStr = capStr.toLowerCase().trimStart().replace(/^\w/, (c: string) => c.toUpperCase())
  } else {
    capStr = capStr.trimStart().replace(/^\w/, (c: string) => c.toUpperCase())
  }
  return capStr
}
