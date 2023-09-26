import {createSlice} from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    fetched: false,
    county: '',
    state: '',
    country: '',
  },
  reducers: {
    handleUpdateLocation(state, action) {
      state = action.payload;
    },
  },
});

export const {handleUpdateLocation} = locationSlice.actions;
export default locationSlice.reducer;
