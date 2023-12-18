import React from 'react'
import classes from './Layout.module.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
