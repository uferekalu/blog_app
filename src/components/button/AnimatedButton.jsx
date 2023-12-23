import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function AnimatedButton({ text, onClick, className, type }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={className}
      type={type}
    >
      {text}
    </motion.button>
  )
}

AnimatedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
}

AnimatedButton.defaultProps = {
  onClick: () => {},
  className: '',
}

export default AnimatedButton
