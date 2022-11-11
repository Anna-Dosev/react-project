import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const toDoSlice = createSlice({
  name: 'toDo',
  gpa: 'gpa',
  dreamSchool: 'school',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.toDo = action.payload
    }
  }
})

export const { addToDo } = toDoSlice.actions

export const selectToDo = (state) => state.toDo;

export default toDoSlice.reducer

