import React from 'react'
import PropTypes from 'prop-types' // Import PropTypes
import classes from './Layout.module.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Layout({ children }) {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.container}>{children}</div>
      <Footer />
    </div>
  )
}

// Define propTypes for the Layout component
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
