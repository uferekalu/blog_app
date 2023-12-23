/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import classes from './GeneralModal.module.scss'

function GeneralModal({ size, children, onHide, show, className }) {
  return (
    <Modal
      size={size}
      arial-labellby="contained-modal-title-vcenter"
      dialogClassName={classes.modal}
      onHide={onHide}
      show={show}
      className={className}
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}

GeneralModal.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
}

export default GeneralModal
