export const format = (value: string, separator: string = ':', display: number = 3) => {
  const newValues: string[] = value?.split(separator)?.slice(0, display)
  if(newValues.length < display) {
    for(let i: number = 0; i < (Number(display) - Number(newValues.length)); i++) {
      newValues.push('0')
    }
  }

  return newValues.join(separator)
}
