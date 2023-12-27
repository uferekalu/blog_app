// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from './api'

export const fetchCategories = createAsyncThunk(
  'blog/fetCategories',
  async () => {
    const response = await fetch(`${baseUrl}/categories`)
    const data = await response.json()
    return data
  },
)

const categoriesSlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchCategories.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        categories: action.payload,
      }))
      .addCase(fetchCategories.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
  },
})

export default categoriesSlice.reducer
