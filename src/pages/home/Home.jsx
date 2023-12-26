import React from 'react'
import { motion } from 'framer-motion'
import classes from './Home.module.scss'
import BlogPost from '../../components/blogPost'
import defaultImg from '../../images/defaultimg.jpg'
import blogLogo from '../../images/blogLogo.png'
import heroBg from '../../images/herobg1.jpg'
import Text from '../../components/text/Text'
import AnimatedButton from '../../components/button/AnimatedButton'

function Home() {
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
    </>
  )
}

export default Home
