import { configureStore } from '@reduxjs/toolkit';
import tripReducer from '../reducers/tripSlice'

export const store = configureStore({
  reducer: {
    trip: tripReducer,
  },
});