import React from 'react'
import { Helmet } from 'react-helmet'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

function BlogPost({ title, description, image, url }) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        {/* Add more meta tags as needed */}
      </Helmet>
    </div>
  )
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default BlogPost
