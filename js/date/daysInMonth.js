const daysInMonth = (...dateArg) => {
  if(!dateArg) return
  
  const commonDays = [28, 29, 30, 31]
  const numOfDays = new Date(dateArg[0], dateArg[1], 0).getDate();
  const filterNumDays = (commonDays.includes(numOfDays)) ? numOfDays : 31
  let newObj = {
    days: filterNumDays,
    start: new Date([dateArg[0], dateArg[1], 1]).getDay(),
    end: new Date([dateArg[0], dateArg[1], filterNumDays]).getDay(),
    value: []
  }
  for(let i = 1; i <= filterNumDays; i++) {
    const dateValue = new Date([dateArg[0], dateArg[1], i]).getDate()
    newObj.value.push(dateArg[0] +'-'+ dateArg[1] +'-'+ dateValue)
  }
  return newObj;
}

const daysInUTCMonth = (...dateArg) => {
  if(!dateArg) return
  
  const commonDays = [28, 29, 30, 31]
  const numOfDays = new Date(Date.UTC(dateArg[0], dateArg[1], 0)).getUTCDate()
  const filterNumDays = (commonDays.includes(numOfDays)) ? numOfDays : 31
  let newObj = {
    days: filterNumDays,
    start: new Date(Date.UTC(dateArg[0], Number(dateArg[1]) - 1, 1)).getUTCDay(),
    end: new Date(Date.UTC(dateArg[0], Number(dateArg[1]) - 1, filterNumDays)).getUTCDay(),
    value: []
  }
  for(let i = 1; i <= filterNumDays; i++) {
    const dateValue = new Date(Date.UTC(dateArg[0], Number(dateArg[1]) - 1, i)).getUTCDate()
    newObj.value.push(dateArg[0] +'-'+ dateArg[1] +'-'+ dateValue)
  }
  return newObj;
}

export {
  daysInMonth,
  daysInUTCMonth
}
