import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    info: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
    },
  },
  reducers: {
    handleUpdateToken(state, action) {
      state.token = action.payload;
    },
    handleUpdateUserInfo(state, action) {
      state.info = action.payload;
    },
  },
});

export const {handleUpdateToken, handleUpdateUserInfo} = userSlice.actions;
export default userSlice.reducer;
