// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseUrl from './api'

export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
  const response = await fetch(`${baseUrl}/posts`)
  const data = await response.json()
  return data
})

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchPosts.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        posts: action.payload,
      }))
      .addCase(fetchPosts.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
  },
})

export default blogSlice.reducer
