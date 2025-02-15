import { createSlice } from "@reduxjs/toolkit";

// Load trips from localStorage on startup
const loadTripsFromLocalStorage = () => {
  const storedTrips = localStorage.getItem('trips');
  return storedTrips ? JSON.parse(storedTrips) : [];
};

// Save trips to localStorage whenever Redux state changes
const saveTripsToLocalStorage = (trips) => {
  localStorage.setItem("trips", JSON.stringify(trips));
};

const initialState = {
  trips: loadTripsFromLocalStorage(), // ✅ Load from localStorage
  selectedTrip: null,
};

const tripSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
      saveTripsToLocalStorage(state.trips); // ✅ Save updated state to localStorage
    },
    updateTrip: (state, action) => {
      const index = state.trips.findIndex((trip) => trip.id === action.payload.id);
      if (index !== -1) {
        state.trips[index] = { ...state.trips[index], ...action.payload };
        saveTripsToLocalStorage(state.trips); // ✅ Save updated state to localStorage
      }
    },
    deleteTrip: (state, action) => {
      state.trips = state.trips.filter((trip) => trip.id !== action.payload);
      saveTripsToLocalStorage(state.trips); // ✅ Save updated state to localStorage
    },
    setSelectedTrip: (state, action) => {
      state.selectedTrip = action.payload;
    },
  },
});

export const { addTrip, updateTrip, deleteTrip, setSelectedTrip } = tripSlice.actions;
export default tripSlice.reducer;
