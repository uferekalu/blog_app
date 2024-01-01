/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classes from './Slider.module.scss'
import AnimatedButton from '../button/AnimatedButton'
import { formatDate } from '../../utils/cookieUtils'

function BlogSlider({ slides }) {
  const sliderSettings = {
    // dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      {/* Ensure the slider fits within the viewport */}
      <Slider {...sliderSettings}>
        {slides?.map((slide) => (
          <motion.div
            key={slide.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Framer Motion animation applied to individual slides */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                padding: '20px',
                boxSizing: 'border-box',
                width: '90%',
                margin: '0 auto',
                marginTop: '40px',
              }}
              className={classes.slider__container}
            >
              <motion.img
                src={`http://localhost:5000${slide.image}`}
                alt="logo"
                className={classes.slider__container__img}
                animate={{ rotateY: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={classes.slider__container__title__date}
              >
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={classes.slider__container__title__date__title}
                >
                  {slide.title}
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={classes.slider__container__title__date__dt}
                >
                  {formatDate(slide.createdAt)}
                </motion.span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={classes.slider__container__description}
              >
                {slide.description.length > 170
                  ? `${slide.description.slice(0, 170)}.....`
                  : slide.description}
              </motion.p>
              <AnimatedButton
                type="button"
                text="Read More"
                className={classes.slider__container__more__btn}
                onClick={() => {}}
              />
            </motion.div>
          </motion.div>
        ))}
      </Slider>
    </div>
  )
}

BlogSlider.propTypes = {
  slides: PropTypes.arrayOf(
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

export default BlogSlider
