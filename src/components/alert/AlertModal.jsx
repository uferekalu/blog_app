import React from 'react'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import classes from './AlertModal.module.scss'
import GeneralModal from '../modal/GeneralModal'
import signupBg from '../../images/signup.jpg'
import AnimatedButton from '../button/AnimatedButton'

function AlertModal({ showAlert, setShowAlert, text }) {
  return (
    <GeneralModal
      size="sm"
      show={showAlert}
      onHide={() => {
        setShowAlert(false)
      }}
      className={classes.alert}
      style={{ backgroundImage: `url(${signupBg})` }}
      style1={{
        marginTop: '10vh',
      }}
    >
      <Modal.Body className={classes.alert__body}>
        <motion.i
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px',
            marginBottom: '12px',
            color: 'white',
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bi bi-check-circle"
        />
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.alert__body__text}
        >
          {text}
        </motion.p>
        <AnimatedButton
          type="button"
          text="Close"
          className={classes.alert__body__btn}
          onClick={() => {
            setShowAlert(false)
          }}
        />
      </Modal.Body>
    </GeneralModal>
  )
}

AlertModal.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  setShowAlert: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default AlertModal
