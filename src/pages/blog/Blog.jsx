import React from 'react'
import BlogPost from '../../components/blogPost'
import defaultImg from '../../images/defaultimg.jpg'

function Blog() {
  return (
    <div>
      <BlogPost
        title="Blog Post"
        description="This is a blog page."
        url="/"
        image={defaultImg}
      />
      <h1>Blog Page</h1>
    </div>
  )
}

export default Blog
