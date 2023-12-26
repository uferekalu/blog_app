import React from 'react'
import classes from './Home.module.scss'
import BlogPost from '../../components/blogPost'
import defaultImg from '../../images/defaultimg.jpg'

function Home() {
  return (
    <div className={classes.homepage}>
      <BlogPost
        title="Home Blog Post"
        description="This is a blog post on the home page."
        url="/"
        image={defaultImg}
      />
      <h1>Home Page</h1>
    </div>
  )
}

export default Home
