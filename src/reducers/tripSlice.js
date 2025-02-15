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
  // Load trips from localStorage if available, otherwise use default trips
  trips: loadTripsFromLocalStorage().length ? loadTripsFromLocalStorage() : [
    { id: "1", title: "Paris", startDate: "2022-01-01", endDate: "2022-01-05", destination: "Paris, France" },
    { id: "2", title: "Rome", startDate: "2022-02-01", endDate: "2022-02-03", destination: "Rome, Italy" },
    { id: "3", title: "Barcelona", startDate: "2022-03-01", endDate: "2022-03-04", destination: "Barcelona, Spain" },
  ],
  // No trip selected by default
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
    setSelectedTrip: (state, action) => { //not currently in use, but could be good for future development to keep track of the selectedTrip across page views (and if saved in local storage)
      state.selectedTrip = action.payload;
    },
  },
});

export const { addTrip, updateTrip, deleteTrip, setSelectedTrip } = tripSlice.actions;
export default tripSlice.reducer;
