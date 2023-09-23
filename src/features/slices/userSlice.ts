import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
  },
  reducers: {
    handleUpdateToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const {handleUpdateToken} = userSlice.actions;
export default userSlice.reducer;
