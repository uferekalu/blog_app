import React from 'react'
import BlogPost from './blogPost'

function NotFound() {
  return (
    <div>
      <BlogPost
        title="404 - Not Found"
        description="Sorry, the page you are looking for might not exist."
      />
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for might not exist.</p>
    </div>
  )
}

export default NotFound
