import React, { createContext, useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'

// Create the context
const AppContext = createContext()

// Define the initial state and reducer function
const initialState = {
  // Define your initial state properties here
  isSearch: false,
  searchValue: '',
  isMenuOpen: false,
  createSignup: false,
  createSignin: false,
  authenticateOption: '',
  showAlert: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        isSearch: action.payload,
      }
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload,
      }
    case 'SET_MENU_OPEN':
      return {
        ...state,
        isMenuOpen: action.payload,
      }
    case 'SET_CREATE_SIGNUP':
      return {
        ...state,
        createSignup: action.payload,
      }
    case 'SET_CREATE_SIGNIN':
      return {
        ...state,
        createSignin: action.payload,
      }
    case 'SET_AUTHENTICATE_OPTION':
      return {
        ...state,
        authenticateOption: action.payload,
      }
    case 'SET_ALERT':
      return {
        ...state,
        showAlert: action.payload,
      }
    default:
      return state
  }
}

// Create the context provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  // Memoize the context value
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// Export the context itself
export default AppContext
