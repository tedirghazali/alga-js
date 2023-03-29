export const years = (year: number = new Date().getFullYear(), ellipsis: number = 5, control: boolean = false): number[] => {
  const newYears: number[] = []
  const prevYear: number = Number(year) - (Number(ellipsis) + 1)
  const nextYear: number = Number(year) + Number(ellipsis)
  
  for(let i = prevYear;i <= nextYear;i++) {
    if(control) {
      const newObj: any = {
        value: i,
        text: i
      }
      if(i === prevYear) {
        newObj.text = 'Prev'
      } else if(i === nextYear) {
        newObj.text = 'Next'
      }
      newYears.push(newObj)
    } else {
      newYears.push(i)
    }
  }
  return newYears
}
