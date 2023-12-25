import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import classes from './Header.module.scss'
import logo from '../../images/logo.jpg'
import flowerybg from '../../images/flowerybg.jpg'
import Text from '../text/Text'
import AnimatedButton from '../button/AnimatedButton'
import AnimatedInput from '../input/AnimatedInput'
import AppContext from '../../utils/AppContext'

function Header() {
  const { state, dispatch } = useContext(AppContext)

  const handleSearchToggle = () => {
    dispatch({ type: 'SET_SEARCH', payload: !state.isSearch })
  }

  const handleSearchInputChange = (event) => {
    dispatch({ type: 'SET_SEARCH_VALUE', payload: event.target.value })
  }

  const handleMenuToggle = () => {
    dispatch({ type: 'SET_MENU_OPEN', payload: !state.isMenuOpen })
  }
  return (
    <motion.div className={classes.header}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__logo__container}
      >
        <img
          src={logo}
          alt="logo"
          className={classes.header__logo__container__img}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__link__container}
      >
        <Text text="Blog" className={classes.header__link__container__text} />
        <Text text="About" className={classes.header__link__container__text} />
        {state.isSearch && (
          <>
            <AnimatedInput
              type="text"
              placeholder="Search..."
              name=""
              className={classes.header__link__container__search}
              value={state.searchValue}
              onChange={handleSearchInputChange}
            />
            <motion.i
              onClick={handleSearchToggle}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                color: 'black',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginLeft: '-43px',
                marginTop: '2px',
              }}
              className="bi bi-x-circle"
            />
          </>
        )}
        {!state.isSearch && (
          <motion.i
            onClick={handleSearchToggle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            className="bi bi-search"
          />
        )}
        <AnimatedButton
          type="button"
          text="Contact Us"
          className={classes.header__link__container__btn}
          onClick={() => {}}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__mobile}
      >
        {state.isSearch && (
          <>
            <AnimatedInput
              type="text"
              placeholder="Search..."
              name=""
              className={classes.header__link__container__search}
              value={state.searchValue}
              onChange={handleSearchInputChange}
            />
            <motion.i
              onClick={handleSearchToggle}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                color: 'black',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginLeft: '-43px',
                marginTop: '-4px',
              }}
              className="bi bi-x-circle"
            />
          </>
        )}
        {!state.isSearch && (
          <motion.i
            onClick={handleSearchToggle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '-7px',
            }}
            className="bi bi-search"
          />
        )}
        {!state.isMenuOpen && (
          <motion.i
            onClick={handleMenuToggle}
            transition={{ duration: 0.5 }}
            style={{
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '20px',
              marginTop: '-10px',
            }}
            className="bi bi-list"
          />
        )}
        {state.isMenuOpen && (
          <motion.i
            onClick={handleMenuToggle}
            transition={{ duration: 0.5 }}
            style={{
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '20px',
              marginTop: '-10px',
            }}
            className="bi bi-x-square-fill"
          />
        )}
        <motion.div
          style={{ backgroundImage: `url(${flowerybg})` }}
          key={state.isMenuOpen}
          initial={{
            opacity: 0,
            scale: 0.2,
            y: '-50%',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          }} // Start from the middle
          animate={{
            opacity: 1,
            scale: 1,
            y: '0%',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.4)',
          }} // Grow to cover the screen
          exit={{ opacity: 0, scale: 0.5, y: '-50%' }}
          transition={{ duration: 1.0 }}
          className={`${
            state.isMenuOpen
              ? classes.header__mobile__menucontent
              : classes.header__mobile__nomenucontent
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.header__mobile__menucontent__container}
          >
            <Text
              text="Blog"
              className={classes.header__mobile__menucontent__container__text}
            />
            <Text
              text="About"
              className={classes.header__mobile__menucontent__container__text}
            />
            <AnimatedButton
              type="button"
              text="Contact Us"
              className={classes.header__mobile__menucontent__container__btn}
              onClick={() => {}}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Header
