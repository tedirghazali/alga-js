export const urlEncode = (text: string, type: string = 'raw'): string => {
  let newString: string = encodeURI(text)
  if(type === 'param') {
    newString = encodeURIComponent(text)
  }
    
  return newString
}

export const urlDecode = (text: string, type: string = 'raw'): string => {
  let newString: string = decodeURI(text)
  if(type === 'param') {
    newString = decodeURIComponent(text)
  }
    
  return newString
}

export const urlEncodeAsync = async (textPromise: Promise<string>, type: string = 'raw'): Promise<string> => {
  const text = await Promise.resolve(textPromise)
  return Promise.resolve(urlEncode(text, type))
}

export const urlDecodeAsync = async (textPromise: Promise<string>, type: string = 'raw'): Promise<string> => {
  const text = await Promise.resolve(textPromise)
  return Promise.resolve(urlDecode(text, type))
}
