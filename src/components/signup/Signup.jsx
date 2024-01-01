/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import GeneralModal from '../modal/GeneralModal'
import classes from './Signup.module.scss'
import { signUp } from '../../slices/authSlice'
import AnimatedInput from '../input/AnimatedInput'
import AnimatedButton from '../button/AnimatedButton'
import signupBg from '../../images/signup.jpg'

function SignupModal({ createSignup, setCreateSignup, setCreateSignin }) {
  const auth = useSelector((state) => state.auth)
  const fileInputRef = useRef(null)
  const dispatch = useDispatch()
  const [image, setImage] = useState(null)
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })

  useEffect(() => {
    if (auth.signUpSuccess === 'User registered successfully') {
      setCreateSignup(false)
      setCreateSignin(true)
    }
  }, [auth.signUpSuccess, setCreateSignup, setCreateSignin])

  const handleChooseFileClick = () => {
    fileInputRef.current.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setImage(file)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('file', image)
    data.append('username', userData.username)
    data.append('password', userData.password)

    dispatch(signUp(data))
  }

  return (
    <GeneralModal
      size="768px"
      show={createSignup}
      onHide={() => {
        setCreateSignup(false)
        window.location.reload()
      }}
      className={classes.create__signup}
      style={{ backgroundImage: `url(${signupBg})` }}
      style1={{
        marginTop: '10vh',
      }}
    >
      <Modal.Body className={classes.signup}>
        <motion.form
          className={classes.signup__form}
          encType="multipart/form-data"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.signup__form__heading__container}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.signup__form__heading__container__text}
            >
              Signup
            </motion.div>
          </motion.div>
          {auth?.signInError && (
            <motion.span className={classes.signup__form__errors}>
              {auth.signUpError}
            </motion.span>
          )}
          <AnimatedInput
            type="text"
            placeholder="Username"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            className={classes.signup__form__input__name}
          />
          <AnimatedInput
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className={classes.signup__form__input__password}
          />
          <AnimatedInput
            type="file"
            onChange={handleImageChange}
            className={classes.signup__form__input__file}
            ref={fileInputRef}
          />
          <motion.div className={classes.signup__form__choosefile__holder}>
            <AnimatedButton
              text="Choose File"
              onClick={handleChooseFileClick}
              className={classes.signup__form__choosefile__holder__btn}
              type="button"
            />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.signup__form__choosefile__holder__file}
            >
              {image ? image.name : 'No file selected'}
            </motion.span>
          </motion.div>
          <AnimatedButton
            text="Submit"
            type="submit"
            onClick={handleSignUp}
            className={classes.signup__form__submit__btn}
          />
        </motion.form>
      </Modal.Body>
    </GeneralModal>
  )
}

SignupModal.propTypes = {
  createSignup: PropTypes.bool.isRequired,
  setCreateSignup: PropTypes.func.isRequired,
  setCreateSignin: PropTypes.func.isRequired,
}

export default SignupModal
