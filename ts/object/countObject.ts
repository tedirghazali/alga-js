export const count = (fromObject: any): number => {
  return Number(Object.entries(fromObject).length)
}
