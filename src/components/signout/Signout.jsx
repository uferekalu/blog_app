/* eslint-disable no-undef */
import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { signOut } from '../../slices/authSlice'
import AnimatedButton from '../button/AnimatedButton'

function SignOutButton({ className }) {
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
    window.location.reload()
  }

  return (
    <AnimatedButton
      text="Sign Out"
      type="button"
      onClick={handleSignOut}
      className={className}
    />
  )
}

SignOutButton.propTypes = {
  className: PropTypes.string.isRequired,
}

export default SignOutButton
