import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const AnimatedInput = forwardRef(
  ({ placeholder, className, name, value, onChange, type }, ref) => (
    <motion.input
      type={type}
      placeholder={placeholder}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  ),
)

AnimatedInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

AnimatedInput.defaultProps = {
  className: '',
  placeholder: '',
  name: '',
  value: '',
}

export default AnimatedInput
