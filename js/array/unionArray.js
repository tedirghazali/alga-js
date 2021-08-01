// Union of Arrays (Set Theory/Operation) in JavaScript by Tedir Ghazali
export const union = (...restArg) => {
  return Array.from(new Set(restArg.flat()))
}
