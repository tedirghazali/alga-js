export const years = (year: number = new Date().getFullYear(), ellipsis: number = 5): number[] => {
  const newYears: number[] = []
  const prevYear: number = Number(year) - (Number(ellipsis) + 1)
  const nextYear: number = Number(year) + Number(ellipsis)
  
  for(let i = prevYear;i <= nextYear;i++) {
    newYears.push(i)
  }
  return newYears
}
