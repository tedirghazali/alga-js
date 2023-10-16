export const double = (value: string, separator: string = ':', type: string = 'double') => {
  let newValues: string[] = value.split(separator)

  if(type === 'double') {
    newValues = newValues.map((i: string) => {
      if(i.length <= 1) {
        i = i + '0'
      }
      return i
    })
  } else if(type === 'normal') {
    newValues = newValues.map((i: string, ind: number) => {
      if(i.length <= 1 && ind >= 1) {
        i = i + '0'
      }
      return i
    })
  }

  return newValues.join(separator)
}
