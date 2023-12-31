/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import classes from './CategorySlide.module.scss'

function CategorySlide({ slides, handleCategoryDetails, categoryId }) {
  const sliderSettings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <motion.div
      style={{ maxWidth: '100%', overflow: 'hidden' }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.category__slide}
    >
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
              style={
                categoryId === slide?.id
                  ? {
                      padding: '20px',
                      boxSizing: 'border-box',
                      width: '90%',
                      margin: '0 auto',
                      marginTop: '40px',
                      backgroundColor: 'teal',
                    }
                  : {
                      padding: '20px',
                      boxSizing: 'border-box',
                      width: '90%',
                      margin: '0 auto',
                      marginTop: '40px',
                    }
              }
              className={classes.slider__container}
              onClick={() => handleCategoryDetails(slide?.id)}
            >
              <motion.img
                src={slide.image}
                alt="logo"
                className={classes.slider__container__img}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={classes.slider__container__name}
                style={
                  categoryId === slide?.id
                    ? {
                        color: 'white',
                      }
                    : {
                        color: 'black',
                      }
                }
              >
                {slide.name}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  )
}

CategorySlide.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          createdAt: PropTypes.string.isRequired,
          updatedAt: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
  handleCategoryDetails: PropTypes.func.isRequired,
  categoryId: PropTypes.number.isRequired,
}

export default CategorySlide
