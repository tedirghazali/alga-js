export const slug = (val: string, max: number = 0, duplicate: number = 0): string => {
  let newVal = val.trim()

  // Make the string lowercase and nomalize or replace accented characters or swap ñ for n.
  newVal = newVal.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  // only allow lowercase chars and numbers, replace spaces and dashes to single dash.
  newVal = newVal.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
  
  if(Number(max) > 0) {
    newVal = newVal.slice(0, Number(max))
  }

  if(Number(duplicate) > 0) {
    newVal = newVal +'-'+ duplicate
  }

  return newVal
}
