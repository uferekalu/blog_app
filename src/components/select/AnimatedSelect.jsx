import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function AnimatedSelect({ options, onSelect, className }) {
  return (
    <motion.select
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onChange={(e) => onSelect(e.target.value)}
      className={className}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </motion.select>
  )
}

AnimatedSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string,
}

AnimatedSelect.defaultProps = {
  onSelect: () => {},
  className: '',
}

export default AnimatedSelect
