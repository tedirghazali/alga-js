export const spaceBetween = (numArg: string | number): string => {
  return String(numArg).replace(/\d{4}(?=.)/g, '$& ');
}
