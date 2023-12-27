// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from './api'

export const fetchTags = createAsyncThunk('blog/fetchTags', async () => {
  const response = await fetch(`${baseUrl}/tags`)
  const data = await response.json()
  return data
})

const tagSlice = createSlice({
  name: 'tag',
  initialState: {
    tags: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchTags.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        tags: action.payload,
      }))
      .addCase(fetchTags.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
  },
})

export default tagSlice.reducer
