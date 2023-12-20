// src/store/index.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit'
import getBlogPostsReducer from '../slices/getBlogPostsSlice'

const store = configureStore({
  reducer: {
    blog: getBlogPostsReducer,
  },
})

export default store
