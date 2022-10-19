import { configureStore } from '@reduxjs/toolkit'
import questionReducer from '../features/generic/genericSlice'

export default configureStore({
  reducer: {
    questions: questionReducer,
  }
})