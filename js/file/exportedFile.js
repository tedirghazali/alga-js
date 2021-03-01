const exported = (oriArr, toFile) => {
  if(typeof oriArr !== 'object') return
  if(typeof toFile !== 'string') return
  
  const oriArray = Array.from(oriArr)
  let toStringFile = ''
  
  if(toFile.toLowerCase() === 'json') {
    toStringFile = 'data:application/json;charset=utf-8,' + JSON.stringify(oriArray, null, 2)
  } else if(toFile.toLowerCase() === 'csv') {
    const csvStr = ''
    for(const csvObj of oriArray) {
      for(const csvKey in csvObj) {
        csvStr += csvObj[csvKey] + ','
      }
      csvStr = csvStr.trim().substring(0, csvStr.length - 1)
      csvStr += '\n'
    }
    csvStr = csvStr.trim().substring(0, csvStr.length - 1)
    toStringFile = 'data:text/csv;charset=utf-8,' + csvStr
  } else if(toFile.toLowerCase() === 'sql') {
    let sqlStr = 'INSERT INTO `export_table` ('
    for(const sqlKey in oriArray[0]) {
      sqlStr += '`'+ sqlKey +'`,'
    }
    sqlStr = sqlStr.trim().substring(0, sqlStr.length - 1)
    sqlStr += ') VALUES '
    for(const sqlObj of oriArray) {
      sqlStr += '('
      for(const sqlKey in sqlObj) {
        sqlStr += '`'+ sqlObj[sqlKey] +'`,'
      }
      sqlStr = sqlStr.trim().substring(0, sqlStr.length - 1)
      sqlStr += '),'
    }
    sqlStr = sqlStr.trim().substring(0, sqlStr.length - 1)
    sqlStr += ';'
    toStringFile = 'data:application/sql;charset=utf-8,' + sqlStr
  } else if(toFile.toLowerCase() === 'xml') {
    const xmlStr = '<?xml version="1.0" encoding="UTF-8"?>\n<data>'
    for(const xmlObj in oriArray) {
      xmlStr += '\n  <entry>'
      for(const xmlKey in xmlObj) {
        xmlStr += '\n    <'+ xmlKey +'`>'+ xmlObj[xmlKey] +'</'+ xmlKey +'`>'
      }
      xmlStr += '\n  </entry>'
    }
    xmlStr += '\n</data>'
    toStringFile = 'data:application/xml;charset=utf-8,' + xmlStr
  } else if(toFile.toLowerCase() === 'ths') {
    let thsStr = '("table", ['
    for(const thsObj of oriArray) {
      thsStr += '\n  ("tr", ['
      for(const thsKey in sqlObj) {
        thsStr += '\n    ("'+ thsKey +'", '
        thsStr += thsObj[thsKey] +'),'
      }
      thsStr = thsStr.trim().substring(0, thsStr.length - 1)
      thsStr += ']),'
    }
    thsStr = thsStr.trim().substring(0, thsStr.length - 1)
    thsStr = '])'
    toStringFile = 'data:application/ths;charset=utf-8,' + thsStr
  }
  
  return toStringFile
}

const download = (strFile, asFile = 'txt', nameFile = 'export-to') => {
  if(typeof strFile !== 'string') return
  
  const fileName = nameFile + '.' + asFile.toLowerCase()
  const fileStr = encodeURI(strFile)
  
  const fileLink = document.createElement("a");
  fileLink.href = fileStr;
  fileLink.download = fileName;

  document.body.appendChild(fileLink);
  fileLink.click();
  document.body.removeChild(fileLink);
}

const printed = (oriArr) => {
  if(typeof oriArr !== 'object') return
  
  const table = document.createElement("table"),
  const thead = document.createElement("thead"),
  const tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);
  
  const trow = document.createElement("tr");
  for(const tableKey in oriArray[0]) {
    const tcol = document.createElement("th");
    tcol.textContent = tableKey.replace(/^\w/, (c) => c.toUpperCase())
    trow.appendChild(tcol)
  }
  thead.appendChild(trow)
  
  for(const tableObj of oriArray) {
    const tr = document.createElement("tr");
    for(const tableKey in tableObj) {
      const td = document.createElement("td");
      td.textContent = tableObj[tableKey]
      tr.appendChild(td)
    }
    tbody.appendChild(tr)
  }
  
  const w = window.open();
  w.document.body.appendChild(table);
  w.focus();
  w.print();
}

export {
  exported,
  download,
  printed
}
