/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import BlogPost from '../../components/blogPost'
import defaultImg from '../../images/defaultimg.jpg'
import { getCookie, parseTokenExpiration } from '../../utils/cookieUtils'
import AnimatedButton from '../../components/button/AnimatedButton'
import classes from './Blog.module.scss'
import CreateCategoryModal from '../../components/category/CreateCategory'
import SignOutButton from '../../components/signout/Signout'

function Blog() {
  const [authenticatedUser, setAuthenticatedUser] = useState()
  const [createCat, setCreateCat] = useState(false)
  const token = useMemo(() => getCookie('token'), [])
  const tokenExpiration = useMemo(
    () => (token ? parseTokenExpiration(token) : ''),
    [token],
  )

  const handleAuthenticatedUser = useCallback(() => {
    if (token && tokenExpiration !== null) {
      const decodedUser = jwtDecode(token)
      setAuthenticatedUser(decodedUser)
    }
  }, [tokenExpiration, token])
  useEffect(() => {
    handleAuthenticatedUser()
  }, [handleAuthenticatedUser])

  return (
    <>
      <div className={classes.blog}>
        <BlogPost
          title="Blog Post"
          description="This is a blog page."
          url="/"
          image={defaultImg}
        />
        <h1>Blog Page</h1>
        {authenticatedUser && (
          <SignOutButton className={classes.blog__signout} />
        )}
        {authenticatedUser?.isAdmin && (
          <AnimatedButton
            text="Create Category"
            type="button"
            onClick={() => setCreateCat(true)}
            className={classes.blog__create__category}
          />
        )}
      </div>
      <CreateCategoryModal createCat={createCat} setCreateCat={setCreateCat} />
    </>
  )
}

export default Blog
