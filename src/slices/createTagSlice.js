// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl, setHeaders } from './api'

const initialState = {
  tag: null,
  status: 'idle',
  error: null,
}

export const createTagAction = createAsyncThunk('blog/tag', async (data) => {
  const response = await axios.post(
    `${baseUrl}/tags`,
    {
      name: data.name,
    },
    setHeaders(),
  )
  return response.data
})

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTagAction.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(createTagAction.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        tag: action.payload,
      }))
      .addCase(createTagAction.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
  },
})

export default tagSlice.reducer
