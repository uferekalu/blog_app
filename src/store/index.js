/* eslint-disable import/no-extraneous-dependencies */
// src/store/index.js
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from '../slices/authSlice'
import getBlogPostsReducer from '../slices/getBlogPostsSlice'

const composedEnhancer = composeWithDevTools({
});

const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: getBlogPostsReducer,
    enhancers: [composedEnhancer],
  },
  devTools: true,
})

export default store
