/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import GeneralModal from '../modal/GeneralModal'
import AnimatedInput from '../input/AnimatedInput'
import AnimatedButton from '../button/AnimatedButton'
import { createCategory } from '../../slices/createCategorySlice'
import classes from './CreateCategory.module.scss'

function CreateCategoryModal({ createCat, setCreateCat }) {
  const [categoryData, setCategoryData] = useState({
    name: '',
  })
  const dispatch = useDispatch()
  const category = useSelector((state) => state.createCategory)

  useEffect(() => {
    if (category.category) {
      setCreateCat(false)
    }
  }, [category.category, setCreateCat])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCategoryData({ ...categoryData, [name]: value })
  }

  const handleCreateCategory = async (e) => {
    e.preventDefault()
    const data = {
      name: categoryData.name,
    }

    dispatch(createCategory(data))
  }

  return (
    <GeneralModal
      size="768px"
      show={createCat}
      onHide={() => {
        setCreateCat(false)
      }}
      className={classes.create__category}
    >
      <Modal.Body className={classes.category}>
        <motion.form className={classes.category__form}>
          <h2 className={classes.category__form__heading}>Create Category</h2>
          <AnimatedInput
            type="text"
            placeholder="Category name"
            name="name"
            value={categoryData.name}
            onChange={handleInputChange}
            className={classes.category__form__input__name}
          />
          <AnimatedButton
            text="Submit"
            type="submit"
            onClick={handleCreateCategory}
            className={classes.category__form__btn__submit}
          />
        </motion.form>
      </Modal.Body>
    </GeneralModal>
  )
}

CreateCategoryModal.propTypes = {
  createCat: PropTypes.bool.isRequired,
  setCreateCat: PropTypes.func.isRequired,
}

export default CreateCategoryModal
