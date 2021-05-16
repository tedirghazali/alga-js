export const setCookie = (name, value, days) => {
  let expires;
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + "; SameSite=Lax;"+ expires + "; path=/";
}

export const getCookie = name => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for(let i=0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}

export const hasCookie = name => {
  return (getCookie(name)) ? true : false
}

export const removeCookie = name => {
  setCookie(name, "", -1);
}

export const clearCookie = () => {
  let cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let eqPos = cookie.indexOf("=");
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
