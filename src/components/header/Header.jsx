/* eslint-disable no-shadow */
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import classes from './Header.module.scss'
import logo from '../../images/logo.jpg'
import flowerybg from '../../images/flowerybg.jpg'
import Text from '../text/Text'
import AnimatedButton from '../button/AnimatedButton'
import AnimatedInput from '../input/AnimatedInput'
import AppContext from '../../utils/AppContext'
import AnimatedSelect from '../select/AnimatedSelect'
import SignupModal from '../signup/Signup'
import SigninModal from '../signin/Signin'
import { getCookie, parseTokenExpiration } from '../../utils/cookieUtils'
import { clearToken, signOut } from '../../slices/authSlice'
import SignOutButton from '../signout/Signout'
import CreateCategoryModal from '../category/CreateCategory'
import CreateTagModal from '../tag/CreateTagModal'
import { fetchTags } from '../../slices/getTagsSlice'
import { fetchCategories } from '../../slices/getCategoriesSlice'
import CreatePostModal from '../postmodal/CreatePostModal'

function Header() {
  const appDispatch = useDispatch()
  const navigate = useNavigate()
  const { state, dispatch } = useContext(AppContext)
  const [createSignup, setCreateSignup] = useState(false)
  const [createSignin, setCreateSignin] = useState(false)
  const [createPost, setCreatePost] = useState(false)
  const [createCat, setCreateCat] = useState(false)
  const [createTag, setCreateTag] = useState(false)
  const [authenticatedUser, setAuthenticatedUser] = useState()
  const token = useMemo(() => getCookie('token'), [])
  const tokenExpiration = useMemo(
    () => (token ? parseTokenExpiration(token) : ''),
    [token],
  )
  const tags = useSelector((state) => state.tags)
  const categories = useSelector((state) => state.categories)
  const modifiedCategories = useMemo(() => {
    const result = categories?.categories.map((cat) => ({
      value: cat?.id.toString(),
      label: cat?.name,
    }))
    return result
  }, [categories])

  useEffect(() => {
    appDispatch(fetchTags())
    appDispatch(fetchCategories())
  }, [appDispatch])

  const handleSignout = useCallback(() => {
    if (state.authenticateOption === 'signout') {
      appDispatch(signOut())
      navigate('/')
    }
  }, [appDispatch, navigate, state.authenticateOption])

  useEffect(() => {
    if (state.authenticateOption === 'signout') {
      appDispatch(clearToken())
      navigate('/')
    }
  }, [appDispatch, navigate, state.authenticateOption, token])

  useEffect(() => {
    handleSignout()
  }, [handleSignout])

  const handleAuthenticatedUser = useCallback(() => {
    if (token && tokenExpiration !== null) {
      const decodedUser = jwtDecode(token)
      setAuthenticatedUser(decodedUser)
    }
  }, [tokenExpiration, token])
  useEffect(() => {
    handleAuthenticatedUser()
  }, [handleAuthenticatedUser])

  const handleSearchToggle = () => {
    dispatch({ type: 'SET_SEARCH', payload: !state.isSearch })
  }

  const handleSearchInputChange = (event) => {
    dispatch({ type: 'SET_SEARCH_VALUE', payload: event.target.value })
  }

  const handleMenuToggle = () => {
    dispatch({ type: 'SET_MENU_OPEN', payload: !state.isMenuOpen })
  }

  const handleAuthenticateOption = (event) => {
    dispatch({ type: 'SET_AUTHENTICATE_OPTION', payload: event.target.value })
  }

  const handleCreateSignup = useCallback(() => {
    if (state.authenticateOption === 'signup') {
      setCreateSignup(true)
      setCreateSignin(false)
    }
  }, [state.authenticateOption])

  const handleCreateBlogPost = useCallback(() => {
    if (state.authenticateOption === 'post') {
      setCreatePost(true)
    }
  }, [state.authenticateOption])

  const handleCreateCategory = useCallback(() => {
    if (state.authenticateOption === 'category') {
      setCreateCat(true)
    }
  }, [state.authenticateOption])

  const handleCreateSignin = useCallback(() => {
    if (state.authenticateOption === 'signin') {
      setCreateSignin(true)
      setCreateSignup(false)
    }
  }, [state.authenticateOption])

  const handleCreateTag = useCallback(() => {
    if (state.authenticateOption === 'tag') {
      setCreateTag(true)
    }
  }, [state.authenticateOption])

  useEffect(() => {
    handleCreateSignup()
    handleCreateSignin()
    handleCreateCategory()
    handleCreateTag()
    handleCreateBlogPost()
  }, [
    handleCreateSignup,
    handleCreateSignin,
    handleCreateCategory,
    handleCreateTag,
    handleCreateBlogPost,
  ])

  return (
    <motion.div className={classes.header}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.header__logo__container}
      >
        <motion.img
          src={logo}
          alt="logo"
          className={classes.header__logo__container__img}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
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
        {authenticatedUser && (
          <AnimatedSelect
            text="Actions"
            options={
              authenticatedUser.isAdmin
                ? [
                    { value: 'category', label: 'Create Category' },
                    { value: 'tag', label: 'Create Tag' },
                    { value: 'post', label: 'Create Post' },
                    { value: 'signout', label: 'Sign Out' },
                  ]
                : [{ value: 'signout', label: 'Sign Out' }]
            }
            onChange={handleAuthenticateOption}
            className={classes.header__link__container__select}
          />
        )}

        {!authenticatedUser && (
          <AnimatedSelect
            text="Authenticate"
            options={[
              { value: 'signup', label: 'Sign Up' },
              { value: 'signin', label: 'Sign In' },
            ]}
            onChange={handleAuthenticateOption}
            className={classes.header__link__container__select}
          />
        )}
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
            {!authenticatedUser && (
              <>
                <AnimatedButton
                  type="button"
                  text="Sign Up"
                  className={
                    classes.header__mobile__menucontent__container__btn
                  }
                  onClick={() => {
                    setCreateSignup(true)
                    handleMenuToggle()
                  }}
                />
                <AnimatedButton
                  type="button"
                  text="Sign In"
                  className={
                    classes.header__mobile__menucontent__container__btn
                  }
                  onClick={() => {
                    setCreateSignin(true)
                    handleMenuToggle()
                  }}
                />
              </>
            )}
            {authenticatedUser &&
              (authenticatedUser?.isAdmin ? (
                <>
                  <AnimatedButton
                    type="button"
                    text="Create Category"
                    className={
                      classes.header__mobile__menucontent__container__btn
                    }
                    onClick={() => setCreateCat(true)}
                  />
                  <AnimatedButton
                    type="button"
                    text="Create Tag"
                    className={
                      classes.header__mobile__menucontent__container__btn
                    }
                    onClick={() => setCreateTag(true)}
                  />
                  <AnimatedButton
                    type="button"
                    text="Create Post"
                    className={
                      classes.header__mobile__menucontent__container__btn
                    }
                    onClick={() => setCreatePost(true)}
                  />
                  <SignOutButton
                    className={
                      classes.header__mobile__menucontent__container__btn
                    }
                  />
                </>
              ) : (
                <SignOutButton
                  className={
                    classes.header__mobile__menucontent__container__btn
                  }
                />
              ))}
            <AnimatedButton
              type="button"
              text="Contact Us"
              className={classes.header__mobile__menucontent__container__btn}
              onClick={() => {}}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <SignupModal
        createSignup={createSignup}
        setCreateSignup={setCreateSignup}
        setCreateSignin={setCreateSignin}
      />
      <SigninModal
        createSignin={createSignin}
        setCreateSignin={setCreateSignin}
      />
      <CreateCategoryModal createCat={createCat} setCreateCat={setCreateCat} />
      <CreateTagModal createTag={createTag} setCreateTag={setCreateTag} />
      <CreatePostModal
        createPost={createPost}
        setCreatePost={setCreatePost}
        categories={modifiedCategories}
        tags={tags?.tags}
      />
    </motion.div>
  )
}

export default Header
