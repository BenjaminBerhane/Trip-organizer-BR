import { saveTrip } from "./storage";
import { v4 as uuidv4 } from 'uuid';


export function handleTripSubmission(trip) {
    console.log("Submitted Trip:", trip);

    if (!trip.title || !trip.startDate || !trip.endDate || !trip.destination) {
        console.error("Error: Missing trip data");
        return;
    }

    // Ensure trip has an ID before saving
    if (!trip.id) {
        trip.id = uuidv4();
    }

    saveTrip(trip); // finns i utils/storage.js
}