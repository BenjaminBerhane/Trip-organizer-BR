import { configureStore } from '@reduxjs/toolkit';
import tripsReducer from '../reducers/tripSlice';

const store = configureStore({
  reducer: {
    trips: tripsReducer, 
  },
});

export default store;
