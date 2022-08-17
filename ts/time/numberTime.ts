export const hoursInBetween = (startDateArg: Date | number | string, endDateArg: Date | number | string): number => {
  const startDate = new Date(startDateArg)
  const endDate = new Date(endDateArg)
  const milliseconds = Math.abs(Number(startDate.getTime()) - Number(endDate.getTime()))
  const newHours = milliseconds / 36e5
  return Number(newHours.toFixed(0))
}
