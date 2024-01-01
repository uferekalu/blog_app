import { getCookie } from '../utils/cookieUtils'

export const baseUrl = 'http://localhost:5000'

// eslint-disable-next-line consistent-return
export const setHeaders = () => {
  if (getCookie('token') !== null) {
    const headers = {
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
    }
    return headers
  }
}
