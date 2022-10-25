import { configureStore } from '@reduxjs/toolkit'
import questionReducer from '../features/generic/genericSlice'
import profileReducer from '../views/profile/profileSlice'
import toDoListReducer from '../views/profile/toDoList/toDoSlice'

export default configureStore({
  reducer: {
    questions: questionReducer,
    profile: profileReducer,
    toDoList: toDoListReducer
  }
})