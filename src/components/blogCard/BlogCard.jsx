import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import AnimatedButton from '../button/AnimatedButton'
import classes from './BlogCard.module.scss'
import { getTimeAgo } from '../../utils/cookieUtils'

function BlogCard({ post }) {
  return (
    <motion.div
      className={classes.blog__card}
      key={post.id}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        src={`http://localhost:5000${post.image}`}
        alt="logo"
        className={classes.blog__card__post__image}
        animate={{ rotateY: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div className={classes.blog__card__post__details}>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.blog__card__post__details__title}
        >
          {post.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.blog__card__post__details__description}
        >
          {post?.description?.length > 170
            ? `${post.description.slice(0, 170)}.....`
            : post.description}
        </motion.p>
        <motion.div className={classes.blog__card__creator__details}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.blog__card__creator__details__holder}
          >
            <motion.img
              src={`http://localhost:5000${post?.creator?.picture}`}
              alt="logo"
              className={classes.blog__card__creator__details__holder__img}
            />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.blog__card__creator__details__holder__time}
            >
              {getTimeAgo(post?.createdAt)}
            </motion.span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.blog__card__creator__details__tags__content}
          >
            {post?.tags?.length > 4
              ? post?.tags?.slice(0, 4).map((tag) => (
                  <motion.span
                    key={tag.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={
                      classes.blog__card__creator__details__tags__content__text
                    }
                  >
                    {tag?.name}
                  </motion.span>
                ))
              : post?.tags?.map((tag) => (
                  <motion.span
                    key={tag.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={
                      classes.blog__card__creator__details__tags__content__text
                    }
                  >
                    {tag?.name}
                  </motion.span>
                ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <AnimatedButton
        type="button"
        text="More Details"
        onClick={() => {}}
        className={classes.blog__card__btn}
      />
    </motion.div>
  )
}

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
      }),
    ).isRequired,
    creator: PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      isAdmin: PropTypes.bool.isRequired,
      picture: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
export default BlogCard
