const utc = (...dateNums) => {
  return new Date(Date.UTC(...dateNums))
}

export {
  utc
}
