export const roundOf = (numArg: string | number): number => {
  let lookup: Array<number> = [1, 1e3, 1e6, 1e9, 1e12, 1e15, 1e18, 1e21, 1e24]
  let item: number = lookup.slice().reverse().find((item: number) => {
    return Number(numArg) >= item;
  })
  return Math.round(Number(numArg) / item) * item;
}
