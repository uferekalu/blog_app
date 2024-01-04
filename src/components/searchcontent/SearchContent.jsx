/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
// import Slider from 'react-slick'
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classes from './SearchContent.module.scss'
import signupBg from '../../images/signup.jpg'
import AnimatedButton from '../button/AnimatedButton'

function SearchContent({ posts }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.search__content}
      style={{ backgroundImage: `url(${signupBg})` }}
    >
      {posts?.map((post) => (
        <AnimatedButton
          key={post.id}
          type="button"
          text={post.title}
          className={classes.search__content__btn}
          onClick={() => {}}
        />
      ))}
    </motion.div>
  )
}

SearchContent.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
      }).isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          createdAt: PropTypes.string.isRequired,
          updatedAt: PropTypes.string.isRequired,
        }),
      ).isRequired,
      likes: PropTypes.array.isRequired,
      dislikes: PropTypes.array.isRequired,
      creator: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        isAdmin: PropTypes.bool.isRequired,
        picture: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
      }).isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          createdAt: PropTypes.string.isRequired,
          updatedAt: PropTypes.string.isRequired,
          creator: PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired,
            isAdmin: PropTypes.bool.isRequired,
            picture: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt: PropTypes.string.isRequired,
          }).isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
}

export default SearchContent
