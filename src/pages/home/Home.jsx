/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Home.module.scss'
import BlogPost from '../../components/blogPost'
import defaultImg from '../../images/defaultimg.jpg'
import blogLogo from '../../images/blogLogo.png'
import heroBg from '../../images/herobg1.jpg'
import frontend from '../../images/frontend.png'
import fullstack from '../../images/fullstack.png'
import backend from '../../images/backend.png'
import devops from '../../images/devops.jpeg'
import linux from '../../images/linux.png'
import latestpost from '../../images/latestpost.jpg'
import catbg from '../../images/catbg.jpg'
import databases from '../../images/database.png'
import algorithms from '../../images/algorithm.png'
import cloud from '../../images/cloudcomp.jpg'
import machine from '../../images/machinelearn1.jpg'
import Text from '../../components/text/Text'
import AnimatedButton from '../../components/button/AnimatedButton'
import BlogSlider from '../../components/slider/Slider'
import { fetchPosts } from '../../slices/getBlogPostsSlice'
import CategorySlide from '../../components/categoryslide/CategorySlide'

function Home() {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.blog)
  const categories = useSelector((state) => state.categories)
  const [categoriesData, setCategoriesData] = useState([])
  const [isCategorySlide, setIsCategorySlide] = useState(false)
  const [categoryId, setCategoryId] = useState(null)
  const [featuredArticles, setFeaturedArticles] = useState([])

  console.log('category id', categoryId)
  console.log('featured articles', featuredArticles)

  const handleCategoryDetails = (id) => {
    setCategoryId(id)
    const category = categoriesData?.find((cat) => cat.id === id)
    const categoryPosts = category?.posts
    setFeaturedArticles(categoryPosts)
  }

  const handleCategorySlide = () => {
    setIsCategorySlide((prevState) => !prevState)
  }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  useEffect(() => {
    if (categories?.categories) {
      setCategoriesData(categories?.categories)
    }
  }, [categories?.categories])

  useEffect(() => {
    // Mapping of category names to images
    const categoryImageMapping = {
      frontend,
      Backend: backend,
      Fullstack: fullstack,
      DevOps: devops,
      Linux: linux,
      Databases: databases,
      Algorithms: algorithms,
      Cloud: cloud,
      Machine: machine,
    }
    if (categories?.categories) {
      // Attach image value to each category
      const updatedCategories = categories.categories.map((category) => ({
        ...category,
        image: categoryImageMapping[category.name.split(' ')[0]] || defaultImg,
      }))

      setCategoriesData(updatedCategories)
    }
  }, [categories?.categories])

  return (
    <>
      <BlogPost
        title="Home Blog Post"
        description="This is a blog post on the home page."
        url="/"
        image={defaultImg}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.homepage}
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.homepage__hero__content}
        >
          <Text
            text="Featured Post"
            className={classes.homepage__hero__content__featured__post}
          />
          <Text
            text="How AI Will Change The Future"
            className={classes.homepage__hero__content__caption}
          />
          <Text
            text="The future of AI will see home robots having enhanced 
          intelligence, increased capabilities, and becoming more personal 
          and possibly cute. For example, home robots will overcome navigation, direction"
            className={classes.homepage__hero__content__details}
          />
          <AnimatedButton
            type="button"
            text="Read More"
            className={classes.homepage__hero__content__readmore}
            onClick={() => {}}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.homepage__hero__pic}
        >
          <motion.img
            src={blogLogo}
            alt="logo"
            animate={{ rotate: 360 }}
            className={classes.homepage__hero__pic__img}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.homepage__latestpost}
        style={{ backgroundImage: `url(${latestpost})`, height: '700px' }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.homepage__latestpost__heading__container}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.homepage__latestpost__heading__container__text}
          >
            Latest Posts
          </motion.div>
        </motion.div>
        <BlogSlider slides={posts.posts} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.homepage__category}
        style={{ backgroundImage: `url(${catbg})` }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={classes.homepage__category__heading__container}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.homepage__category__heading__container__text}
          >
            Browse The Category---
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.homepage__category__heading__container__text}
            onClick={handleCategorySlide}
          >
            {isCategorySlide ? 'Categories' : 'See All Categories >'}
          </motion.div>
        </motion.div>
        {isCategorySlide && (
          <CategorySlide
            slides={categoriesData}
            handleCategoryDetails={handleCategoryDetails}
            categoryId={categoryId}
          />
        )}
        {!isCategorySlide && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.homepage__category__content}
          >
            {categoriesData.slice(0, 4).map((category) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={category.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={classes.homepage__category__content__details}
                onClick={() => handleCategoryDetails(category?.id)}
                style={
                  categoryId === category.id
                    ? {
                        backgroundColor: 'teal',
                      }
                    : {
                        backgroundColor: 'white',
                      }
                }
              >
                <motion.img
                  src={category.image}
                  alt="logo"
                  className={classes.homepage__category__content__details__img}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={classes.homepage__category__content__details__name}
                  style={
                    categoryId === category.id
                      ? {
                          color: 'white',
                        }
                      : {
                          color: 'black',
                        }
                  }
                >
                  {category.name}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </>
  )
}

export default Home
