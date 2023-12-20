import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function AnimatedInput({ placeholder, className }) {
  return (
    <motion.input
      type="text"
      placeholder={placeholder}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    />
  )
}

AnimatedInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
}

AnimatedInput.defaultProps = {
  className: '',
}

export default AnimatedInput
