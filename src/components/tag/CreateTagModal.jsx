/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import GeneralModal from '../modal/GeneralModal'
import AnimatedInput from '../input/AnimatedInput'
import AnimatedButton from '../button/AnimatedButton'
import classes from './CreateTagModal.module.scss'
import { createTagAction } from '../../slices/createTagSlice'
import signupBg from '../../images/signup.jpg'

function CreateTagModal({ createTag, setCreateTag }) {
  const [tagData, setTagData] = useState({
    name: '',
  })
  const dispatch = useDispatch()
  const tag = useSelector((state) => state.createTag)

  useEffect(() => {
    if (tag.tag) {
      setCreateTag(false)
    }
  }, [tag.tag, setCreateTag])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setTagData({ ...tagData, [name]: value })
  }

  const handleCreateTag = async (e) => {
    e.preventDefault()
    const data = {
      name: tagData.name,
    }

    dispatch(createTagAction(data))
  }

  return (
    <GeneralModal
      size="768px"
      show={createTag}
      onHide={() => {
        setCreateTag(false)
      }}
      className={classes.create__tag}
      style={{ backgroundImage: `url(${signupBg})` }}
      style1={{
        marginTop: '10vh',
      }}
    >
      <Modal.Body className={classes.tag}>
        <motion.form className={classes.tag__form}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={classes.tag__form__heading__container}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.tag__form__heading__container__text}
            >
              Create Tag
            </motion.div>
          </motion.div>
          {tag?.error && (
            <motion.span className={classes.tag__form__errors}>
              {tag.error}
            </motion.span>
          )}
          <AnimatedInput
            type="text"
            placeholder="Tag name"
            name="name"
            value={tagData.name}
            onChange={handleInputChange}
            className={classes.tag__form__input__name}
          />
          <AnimatedButton
            text="Submit"
            type="submit"
            onClick={handleCreateTag}
            className={classes.tag__form__submit__btn}
          />
        </motion.form>
      </Modal.Body>
    </GeneralModal>
  )
}

CreateTagModal.propTypes = {
  createTag: PropTypes.bool.isRequired,
  setCreateTag: PropTypes.func.isRequired,
}

export default CreateTagModal
