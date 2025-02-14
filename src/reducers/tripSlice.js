import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Hämta resor från localStorage vid start
const loadTripsFromLocalStorage = () => {
  const storedTrips = localStorage.getItem('trips');
  return storedTrips ? JSON.parse(storedTrips) : [];
};

// Async operation för att spara trips till localStorage
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
    trips: loadTripsFromLocalStorage(), // ✅ Ladda resor vid start
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
    },
    loadTrips: (state) => {
      state.trips = loadTripsFromLocalStorage(); // ✅ Reducer för att ladda trips manuellt
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

export const { addTrip, setSelectedTrip, loadTrips } = tripSlice.actions;
export default tripSlice.reducer;
