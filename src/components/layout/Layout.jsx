import React from 'react'
import PropTypes from 'prop-types' // Import PropTypes

import classes from './Layout.module.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
      <Footer />
    </>
  )
}

// Define propTypes for the Layout component
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure that 'children' is a node and is required
}

export default Layout
