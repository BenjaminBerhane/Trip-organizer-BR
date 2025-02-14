import { configureStore } from '@reduxjs/toolkit';
import tripReducer from '../reducers/tripSlice.js'

export const store = configureStore({
  reducer: {
    trip: tripReducer,
  },
});