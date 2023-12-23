import React, { useState } from 'react'
import classes from './Home.module.scss'
import BlogPost from '../../components/blogPost'
import defaultImg from '../../images/defaultimg.jpg'
import SignupModal from '../../components/signup/Signup'
import SigninModal from '../../components/signin/Signin'

function Home() {
  const [createSignup, setCreateSignup] = useState(false)
  const [createSignin, setCreateSignin] = useState(false)
  return (
    <>
      <div className={classes.homepage}>
        <BlogPost
          title="Home Blog Post"
          description="This is a blog post on the home page."
          url="/"
          image={defaultImg}
        />
        <h1>Home Page</h1>
        <button type="button" onClick={() => setCreateSignup(true)}>
          Signup
        </button>
        <button type="button" onClick={() => setCreateSignin(true)}>
          Signin
        </button>
      </div>
      <SignupModal
        createSignup={createSignup}
        setCreateSignup={setCreateSignup}
        setCreateSignin={setCreateSignin}
      />
      <SigninModal
        createSignin={createSignin}
        setCreateSignin={setCreateSignin}
      />
    </>
  )
}

export default Home
