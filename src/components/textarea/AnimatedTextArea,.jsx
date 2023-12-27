import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function AnimatedTeaxtArea({
  placeholder,
  className,
  name,
  value,
  onChange,
  type,
  cols,
  rows,
}) {
  return (
    <motion.textarea
      type={type}
      placeholder={placeholder}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      cols={cols}
      rows={rows}
    />
  )
}

AnimatedTeaxtArea.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
}

AnimatedTeaxtArea.defaultProps = {
  className: '',
  placeholder: '',
  name: '',
  value: '',
}

export default AnimatedTeaxtArea
