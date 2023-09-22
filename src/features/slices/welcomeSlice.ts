import {createSlice} from '@reduxjs/toolkit';

export const welcomeSlice = createSlice({
  name: 'welcome',
  initialState: {
    welcome: true,
  },
  reducers: {
    markWelcomeAsFalse(state) {
      state.welcome = false;
    },
  },
});

export const {markWelcomeAsFalse} = welcomeSlice.actions;
export default welcomeSlice.reducer;
