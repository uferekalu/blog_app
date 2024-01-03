/* eslint-disable react/no-array-index-key */
// PulseAnimation.jsx

import React from 'react'
import classes from './PulseAnimation.module.scss'

function PulseAnimation() {
  return (
    <div className={classes.pulse__container}>
      {new Array(4).fill(null).map((pulse, idx) => (
        <div className={classes.pulse__container__pulse} key={idx} />
      ))}
    </div>
  )
}

export default PulseAnimation
