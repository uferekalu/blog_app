// BlogPost.js
import React from 'react';
import { Helmet } from 'react-helmet';

const BlogPost = ({ title, description, image, url }) => {
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
  );
};

export default BlogPost;
