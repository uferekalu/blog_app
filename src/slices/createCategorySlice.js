// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseUrl, setHeaders } from './api'

const initialState = {
  category: null,
  status: 'idle',
  error: null,
}

export const createCategory = createAsyncThunk(
  'blog/createCategory',
  async (data) => {
    const response = await axios.post(
      `${baseUrl}/categories`,
      {
        name: data.name,
      },
      setHeaders(),
    )
    return response.data
  },
)

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(createCategory.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        category: action.payload,
      }))
      .addCase(createCategory.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
  },
})

export default categorySlice.reducer
