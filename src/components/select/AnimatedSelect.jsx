import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function AnimatedSelect({ text, options, onChange, className }) {
  return (
    <div>
      <motion.select
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onChange={onChange}
        className={className}
      >
        <option value="">{text}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </motion.select>
    </div>
  )
}

AnimatedSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string,
}

AnimatedSelect.defaultProps = {
  onChange: () => {},
  className: '',
  text: 'Authenticate',
}

export default AnimatedSelect
