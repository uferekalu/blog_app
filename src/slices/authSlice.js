/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
// authSlice.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl } from './api'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
    signUpSuccess: '',
    signInSuccess: '',
    signUpError: null,
    signInError: null,
  },
  reducers: {
    setToken: (state, action) => ({
      ...state,
      token: action.payload,
      isAuthenticated: true,
      signUpError: null,
      signInError: null,
    }),
    clearToken: (state) => ({
      ...state,
      token: null,
      isAuthenticated: false,
    }),
    setSignUpSuccess: (state, action) => ({
      ...state,
      signUpSuccess: action.payload,
    }),
    setSignUpError: (state, action) => ({
      ...state,
      signUpError: action.payload,
    }),
    setSignInError: (state, action) => ({
      ...state,
      signInError: action.payload,
    }),
  },
})

export const {
  setToken,
  clearToken,
  setSignUpError,
  setSignInError,
  setSignUpSuccess,
} = authSlice.actions
export const selectToken = (state) => state.auth.token
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectSignUpError = (state) => state.auth.signUpError
export const selectSignInError = (state) => state.auth.signInError
export const selectSignUpSuccess = (state) => state.auth.selectSignUpSuccess

export const signOut = () => (dispatch) => {
  // Clear the token from the state
  dispatch(clearToken())

  // Remove the token cookie
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
}

export const signUp = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/signup`, userData)

    if (response.status >= 200 && response.status < 300) {
      const { message } = response.data
      dispatch(setSignUpSuccess(message))
    } else {
      const { error } = response.data
      dispatch(setSignUpError(error))
    }
  } catch (error) {
    dispatch(setSignUpError('An error occurred during signup.'))
  }
}

export const signIn = (userData) => async (dispatch) => {
  try {
    const response = await fetch(`${baseUrl}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })

    if (response.ok) {
      const { accessToken } = await response.json()
      // Save token to Redux store and cookies
      dispatch(setToken(accessToken))
      // Set cookie with the token
      document.cookie = `token=${accessToken}; path=/;`
    } else {
      // Handle sign-in failure
      const { error } = await response.json()
      dispatch(setSignInError(error))
    }
  } catch (error) {
    // Handle network errors or other issues
    dispatch(setSignInError('An error occurred during sign in.'))
  }
}

export default authSlice.reducer
