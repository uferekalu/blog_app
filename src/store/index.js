/* eslint-disable import/no-extraneous-dependencies */
// src/store/index.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from '../slices/authSlice'
import getBlogPostsReducer from '../slices/getBlogPostsSlice'
import createCategoryReducer from '../slices/createCategorySlice'
import createTagReducer from '../slices/createTagSlice'
import createBlogPostReducer from '../slices/createBlogPostSlice'
import getTagsReducer from '../slices/getTagsSlice'
import getCategoriesReducer from '../slices/getCategoriesSlice'

const composedEnhancer = composeWithDevTools({})

const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: getBlogPostsReducer,
    createCategory: createCategoryReducer,
    createTag: createTagReducer,
    createBlogPost: createBlogPostReducer,
    tags: getTagsReducer,
    categories: getCategoriesReducer,
    enhancers: [composedEnhancer],
  },
  devTools: true,
})

export default store
