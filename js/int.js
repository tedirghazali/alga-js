const random = (max = 255) => {
  const maxNum = Number(max) + 1
  return Math.floor(Math.random() * maxNum);
}

export {
  random
}
