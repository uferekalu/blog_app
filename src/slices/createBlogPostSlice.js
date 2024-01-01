/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl, setHeaders } from './api'

const initialState = {
  blogPost: null,
  status: 'idle',
  error: null,
}

export const createBlogPost = createAsyncThunk('blog/post', async (data) => {
  const response = await axios.post(`${baseUrl}/posts`, data, setHeaders())
  return response.data
})

const createBlogPostSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBlogPost.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(createBlogPost.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        blogPost: action.payload,
      }))
      .addCase(createBlogPost.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
  },
})

export default createBlogPostSlice.reducer
