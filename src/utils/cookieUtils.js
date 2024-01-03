/* eslint-disable no-else-return */
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

export function formatDate(inputDate) {
  const options = { day: 'numeric', month: 'short', year: 'numeric' }
  const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options)
  return formattedDate
}

export function getTimeAgo(timestamp) {
  const currentDate = new Date()
  const pastDate = new Date(timestamp)

  const timeDifference = currentDate - pastDate
  const seconds = Math.floor(timeDifference / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const years = Math.floor(days / 365)

  if (years > 0) {
    return years === 1 ? 'a year ago' : `${years} years ago`
  } else if (weeks > 0) {
    return weeks === 1 ? 'a week ago' : `${weeks} weeks ago`
  } else if (days > 0) {
    return days === 1 ? 'a day ago' : `${days} days ago`
  } else if (hours > 0) {
    return hours === 1 ? 'an hour ago' : `${hours} hours ago`
  } else if (minutes > 0) {
    return minutes === 1 ? 'a minute ago' : `${minutes} minutes ago`
  } else {
    return 'just now'
  }
}
