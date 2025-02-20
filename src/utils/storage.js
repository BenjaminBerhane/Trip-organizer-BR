import { v4 as uuidv4 } from 'uuid';
import { store } from './store';
import { addTrip, updateTrip } from '../reducers/tripSlice';

// Function to save or update a trip using Redux
export function saveTrip(trip) {
    const trips = store.getState().trips.trips;
    const existingTripIndex = trips.findIndex(t => t.id === trip.id);

    if (existingTripIndex === -1) {
        // New trip, generate ID if necessary
        trip.id = trip.id || uuidv4();
        store.dispatch(addTrip(trip)); // Dispatch action to Redux
    } else {
        // Editing existing trip
        store.dispatch(updateTrip(trip)); // Dispatch action to update the trip
    }
}
