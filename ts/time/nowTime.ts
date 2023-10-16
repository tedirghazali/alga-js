import { format } from './formatTime'

export const now = (separator: string = ':', display: number = 3) => {
  let newNow: string = new Date().toTimeString().split(' ')[0]
  newNow = format(newNow, separator, display)

  return newNow
}
