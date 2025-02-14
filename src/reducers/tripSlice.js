import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mockad async operation för att spara till localStorage
export const saveTripsToLocalStorage = createAsyncThunk(
  'trips/saveToLocalStorage',
  async (trips, thunkAPI) => {
    localStorage.setItem('trips', JSON.stringify(trips));
    return trips;
  }
);

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    trips: [],
    selectedTrip: null,
    status: 'idle',
    error: null
  },
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveTripsToLocalStorage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveTripsToLocalStorage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trips = action.payload;
      })
      .addCase(saveTripsToLocalStorage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addTrip, setSelectedTrip } = tripSlice.actions;
export default tripSlice.reducer;