import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userID: '',
    token: '',
  },
  reducers: {
    handleUpdateUser(state, action) {
      state.userID = action.payload;
    },
    handleUpdateToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const {handleUpdateToken, handleUpdateUser} = userSlice.actions;
export default userSlice.reducer;
