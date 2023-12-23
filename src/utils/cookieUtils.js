/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
export const getCookie = (name) => {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1)
    }
  }
  return null
}

export const setCookie = (name, value, options = {}) => {
  let cookieString = `${name}=${value}; path=/`
  if (options.expires) {
    const expirationDate = new Date(options.expires).toUTCString()
    cookieString += `; expires=${expirationDate}`
  }
  document.cookie = cookieString
}

export const clearCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export const isTokenExpired = () => {
  const token = getCookie('token')
  const expiration = getCookie('token_expiration')

  if (!token || !expiration) {
    return true // Token or expiration not found
  }

  const expirationDate = new Date(expiration)
  return expirationDate < new Date() // Check if the token has expired
}

export function parseTokenExpiration(token) {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const expirationTimestamp = payload.exp

    if (!expirationTimestamp) {
      return null // Token doesn't contain an expiration claim
    }

    const currentTimestamp = Math.floor(Date.now() / 1000) // Current timestamp in seconds

    if (currentTimestamp > expirationTimestamp) {
      return null // Token has expired
    }

    // Return the expiration timestamp if the token is still valid
    return expirationTimestamp
  } catch (error) {
    return null // Error occurred while parsing
  }
}
