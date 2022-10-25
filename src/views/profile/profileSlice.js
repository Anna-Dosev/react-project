import { createSlice } from '@reduxjs/toolkit'

// const initialState = {};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {},
  reducers: {
    addProfile: (state, action) => ({
      ...state,
      ...action.payload
    }),
  },
});

export const { addProfile } = profileSlice.actions

export const selectProfile = (state) => state.profile;

export default profileSlice.reducer

//reducer is the func that modifies state
//actions is built in method, not same as action in action.payload


// export const profileSlice = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
//     addProfile: (state, action) => {
//       state.profile = action.payload
//     }
//   }
// })

// export const { addProfile } = profileSlice.actions

// export const selectProfile = (state) => state.profile;

// export default profileSlice.reducer