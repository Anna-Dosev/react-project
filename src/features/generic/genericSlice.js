import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [], 
}

export const questionSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addQuestions: (state, action) => {
      state.questions = action.payload
    }
  }
})

export const { addQuestions } = questionSlice.actions

export default questionSlice.reducer