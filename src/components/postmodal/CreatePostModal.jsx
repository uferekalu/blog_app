/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import GeneralModal from '../modal/GeneralModal'
import classes from './CreatePostModal.module.scss'
import AnimatedInput from '../input/AnimatedInput'
import AnimatedButton from '../button/AnimatedButton'
import signupBg from '../../images/signup.jpg'
import { createBlogPost } from '../../slices/createBlogPostSlice'
import AnimatedTeaxtArea from '../textarea/AnimatedTextArea,'
import AnimatedSelect from '../select/AnimatedSelect'
import ReusableCheckbox from '../checkbox/ReusableCheckbox'

function CreatePostModal({ createPost, setCreatePost, categories, tags }) {
  const createdPost = useSelector((state) => state.createBlogPost)
  const fileInputRef = useRef(null)
  const dispatch = useDispatch()
  const [image, setImage] = useState(null)
  const [blogData, setBlogData] = useState({
    title: '',
    description: '',
    categoryId: null,
    tagIds: [],
  })

  useEffect(() => {
    if (createdPost.blogPost) {
      setCreatePost(false)
    }
  }, [createdPost.blogPost, setCreatePost])

  const handleChooseFileClick = () => {
    fileInputRef.current.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setImage(file)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setBlogData({ ...blogData, [name]: value })
  }

  const handleTagChange = (tagId) => {
    const updatedTagIds = blogData.tagIds.includes(tagId)
      ? blogData.tagIds.filter((id) => id !== tagId)
      : [...blogData.tagIds, parseInt(tagId, 10)]

    setBlogData({ ...blogData, tagIds: updatedTagIds })
  }

  const handleCreateBlog = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.file = image
    data.title = blogData.title
    data.description = blogData.description
    data.categoryId = parseInt(blogData?.categoryId, 10)
    data.tagIds = blogData?.tagIds.map((id) => parseInt(id, 10))
    // data.append('file', image);
    // data.append('title', blogData?.title);
    // data.append('description', blogData?.description);
    // data.append('categoryId', parseInt(blogData?.categoryId, 10));
    // data.append('tagIds', blogData?.tagIds.map((id) => parseInt(id, 10)));

    // console.log("form data", data)

    dispatch(createBlogPost(data))
  }

  return (
    <GeneralModal
      size="768px"
      show={createPost}
      onHide={() => {
        setCreatePost(false)
      }}
      className={classes.create__blogPost}
      style={{ backgroundImage: `url(${signupBg})` }}
      style1={{
        marginTop: '5px',
      }}
    >
      <Modal.Body className={classes.blogPost}>
        <motion.form
          className={classes.blogPost__form}
          encType="multipart/form-data"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.blogPost__form__heading__container}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.blogPost__form__heading__container__text}
            >
              Create Blog
            </motion.div>
          </motion.div>
          {createdPost?.error && (
            <motion.span className={classes.blogPost__form__errors}>
              {createdPost?.error}
            </motion.span>
          )}
          <AnimatedInput
            type="text"
            placeholder="Enter Title"
            name="title"
            value={blogData.title}
            onChange={handleInputChange}
            className={classes.blogPost__form__input__title}
          />
          <AnimatedTeaxtArea
            placeholder="Enter description"
            className={classes.blogPost__form__input__description}
            name="description"
            value={blogData.description}
            onChange={handleInputChange}
            type="text"
            cols="6"
            rows="4"
          />
          <AnimatedSelect
            text="Select category"
            options={categories}
            onChange={handleInputChange}
            className={classes.blogPost__form__select__category}
            name="categoryId"
          />
          <div className={classes.blogPost__form__tags}>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.blogPost__form__tags__heading}
            >
              Select Tags:
            </motion.p>
            {tags.map((tag) => (
              <ReusableCheckbox
                key={tag.id}
                label={tag.name}
                isChecked={blogData.tagIds.includes(tag.id)}
                onChange={() => handleTagChange(tag.id)}
              />
            ))}
          </div>
          <AnimatedInput
            type="file"
            onChange={handleImageChange}
            className={classes.blogPost__form__input__file}
            ref={fileInputRef}
          />
          <motion.div className={classes.blogPost__form__choosefile__holder}>
            <AnimatedButton
              text="Choose File"
              onClick={handleChooseFileClick}
              className={classes.blogPost__form__choosefile__holder__btn}
              type="button"
            />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.blogPost__form__choosefile__holder__file}
            >
              {image ? image.name : 'No file selected'}
            </motion.span>
          </motion.div>
          <AnimatedButton
            text="Submit"
            type="submit"
            onClick={handleCreateBlog}
            className={classes.blogPost__form__submit__btn}
          />
        </motion.form>
      </Modal.Body>
    </GeneralModal>
  )
}

CreatePostModal.propTypes = {
  createPost: PropTypes.bool.isRequired,
  setCreatePost: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
}

export default CreatePostModal
