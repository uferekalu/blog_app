import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import AnimatedButton from '../button/AnimatedButton'

function BlogCard({ post }) {
  return (
    <motion.div className="blog__card">
      <motion.div
        className="blog__card__post__image"
        style={{ backgroundImage: `url(${post.image})` }}
      />
      <motion.div className="blog__card__post__details">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <AnimatedButton
          text="More Details"
          onClick={() => {}}
          className="blog__card__post__btn"
        />
      </motion.div>
      <motion.div className="blog__card__creator__details">
        <motion.img src={post.creatorImage} alt="Creator" />
        <p>Created {post.creationTime} ago</p>
        <motion.div className="blog__card__creator__details__tags">
          <motion.span className="blog__card__creator__details__tags__heading">
            Tags
          </motion.span>
          {post.tags.map((tag) => (
            <motion.span className="blog__card__creator__details__tags__text">
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

BlogCard.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    creatorImage: PropTypes.string.isRequired,
    creationTime: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default BlogCard
