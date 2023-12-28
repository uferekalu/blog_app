/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import GeneralModal from '../modal/GeneralModal'
import classes from './Signin.module.scss'
import { signIn } from '../../slices/authSlice'
import AnimatedInput from '../input/AnimatedInput'
import AnimatedButton from '../button/AnimatedButton'
import signupBg from '../../images/signup.jpg'

function SigninModal({ createSignin, setCreateSignin }) {
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })

  useEffect(() => {
    if (auth.token) {
      setCreateSignin(false)
    }
  }, [auth.token, setCreateSignin, navigate])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSignin = async (e) => {
    e.preventDefault()
    const data = {
      username: userData.username,
      password: userData.password,
    }

    dispatch(signIn(data))
  }

  return (
    <GeneralModal
      size="768px"
      show={createSignin}
      onHide={() => {
        setCreateSignin(false)
      }}
      className={classes.create__signin}
      style={{ backgroundImage: `url(${signupBg})` }}
      style1={{
        marginTop: '10vh',
      }}
    >
      <Modal.Body className={classes.signin}>
        <motion.form className={classes.signin__form}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.signin__form__heading__container}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.signin__form__heading__container__text}
            >
              Signin
            </motion.div>
          </motion.div>
          {auth?.signInError && (
            <motion.span className={classes.signin__form__errors}>
              {auth.signInError}
            </motion.span>
          )}
          <AnimatedInput
            type="text"
            placeholder="Username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className={classes.signin__form__input__name}
          />
          <AnimatedInput
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className={classes.signin__form__input__password}
          />
          <AnimatedButton
            text="Submit"
            type="submit"
            onClick={handleSignin}
            className={classes.signin__form__submit__btn}
          />
        </motion.form>
      </Modal.Body>
    </GeneralModal>
  )
}

SigninModal.propTypes = {
  createSignin: PropTypes.bool.isRequired,
  setCreateSignin: PropTypes.func.isRequired,
}

export default SigninModal
