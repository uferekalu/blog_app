import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { signOut } from '../../slices/authSlice'
import AnimatedButton from '../button/AnimatedButton'

function SignOutButton({ className }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = () => {
    dispatch(signOut())
    navigate('/')
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
