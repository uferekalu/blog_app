import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import PropTypes from 'prop-types'

function ReusableCheckbox({ label, onChange, isChecked }) {
  const controls = useAnimation()

  // Define animations
  const checkboxVariants = {
    unchecked: { scale: 0.8, opacity: 0.6 },
    checked: { scale: 1, opacity: 1 },
  }

  const labelVariants = {
    unchecked: { x: 0 },
    checked: { x: 10 },
  }

  useEffect(() => {
    // Trigger animations when the checkbox state changes
    controls.start(isChecked ? 'checked' : 'unchecked')
  }, [controls, isChecked])

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
      role="checkbox" // Set the role attribute to "checkbox" to indicate the element's purpose
      tabIndex={0} // Make the element focusable
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      onClick={() => onChange()}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          onChange()
        }
      }}
    >
      <motion.div
        style={{
          width: 20,
          height: 20,
          border: '2px solid #007BFF',
          borderRadius: 5,
          marginRight: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        variants={checkboxVariants}
        initial={false}
        animate={controls}
      >
        {isChecked && (
          <motion.div
            style={{
              width: 12,
              height: 12,
              backgroundColor: '#007BFF',
              borderRadius: 3,
            }}
          />
        )}
      </motion.div>
      <motion.span
        style={{
          fontSize: 16,
          color: isChecked ? '#007BFF' : 'inherit',
        }}
        variants={labelVariants}
        initial={false}
        animate={controls}
      >
        {label}
      </motion.span>
    </motion.div>
  )
}

ReusableCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
}

export default ReusableCheckbox
