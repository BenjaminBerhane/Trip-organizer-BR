// storage.js
import { v4 as uuidv4 } from 'uuid';


export function getTrips() {
    const trips = JSON.parse(localStorage.getItem("trips"));
    return Array.isArray(trips) ? trips : []; // Ensure it always returns an array
}

// save to local storage
export function saveTripsToLocalStorage(trips) {
    localStorage.setItem('trips', JSON.stringify(trips));
}

// find index by id
export function findTripIndexById(id) {
    if (!id) return -1; //? Prevent undefined errors
    const trips = getTrips();
    if (!trips | trips == null | trips == []){
        return false;
    }
    return trips.findIndex(trip => trip.id === id);
}



export function saveTrip(trip) { // save trip Object to trip array, returns new array
    const savedTrips = getTrips() || []; //default to empty array
    console.log(`Saved trips:`, savedTrips);

    const existingTripIndex = findTripIndexById(trip.id); //check for existing trip in local storage
    
    if (existingTripIndex === -1) {
    
        // generate unique ID for new trip
        trip.id = uuidv4(); //todo check if necessary 
        
        savedTrips.push(trip); // add new trip to savedTrips array
        saveTripsToLocalStorage(savedTrips); // replaced trips in local storage
        
        return 
    }

    // If editing an existing trip
    const oldTrip = savedTrips[existingTripIndex]; // check for existing trip

    savedTrips[existingTripIndex] = { ...oldTrip, ...trip }; // Update the trip
    saveTripsToLocalStorage(savedTrips);

    return 


}