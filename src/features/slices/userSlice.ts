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
      dateOfBirth: '',
    },
  },
  reducers: {
    handleUpdateToken(state, action) {
      state.token = action.payload;
    },
    handleUpdateUserInfo(state, action) {
      state.info = action.payload;
    },
    handleClearState(state: any) {
      state = {
        token: '',
        info: {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          dateOfBirth: '',
        },
      };
    },
  },
});

export const {handleUpdateToken, handleUpdateUserInfo, handleClearState} =
  userSlice.actions;
export default userSlice.reducer;
