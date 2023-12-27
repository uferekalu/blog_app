/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import BlogPost from '../../components/blogPost'
import defaultImg from '../../images/defaultimg.jpg'
import classes from './Blog.module.scss'
import CreateCategoryModal from '../../components/category/CreateCategory'

function Blog() {
  const [createCat, setCreateCat] = useState(false)

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
      </div>
      <CreateCategoryModal createCat={createCat} setCreateCat={setCreateCat} />
    </>
  )
}

export default Blog
