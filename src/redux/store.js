import { configureStore } from '@reduxjs/toolkit'
import questionReducer from '../features/generic/genericSlice'
import profileReducer from '../views/profile/profileSlice'

export default configureStore({
  reducer: {
    questions: questionReducer,
    profile: profileReducer,
  }
})