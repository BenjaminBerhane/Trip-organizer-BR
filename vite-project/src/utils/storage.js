// storage.js
import { v4 as uuidv4 } from 'uuid';
export function getTrips() {
    return JSON.parse(localStorage.getItem('trips'));
}

// save to local storage
export function saveTrips(trips) {
    localStorage.setItem('trips', JSON.stringify(trips));
}

// find index by id
export function findTripIndexById(id) {
    const trips = getTrips();
    if (!trips | trips == null | trips == []){
        return false;
    }
    return trips.findIndex(trip => trip.id === id);
}


export function saveTrip(trip) { // save trip Object to trip array, returns new array
    const savedTrips = getTrips() || []; //default to empty array
    console.log(`Saved trips:`, savedTrips);
    let newTripsArray = savedTrips //initialized as a copy of savedTrips
    const existingTripIndex = findTripIndexById(trip.id); //check for existing trip in local storage
    

    if (existingTripIndex === -1) {
        console.log(`No previous trip found for ${trip.id}, saving a new one`);
        
        const generatedId = uuidv4(); // generate unique ID for new trip
        trip.id = generatedId;
        
        newTripsArray.push(trip); // add new trip to savedTrips array
        saveTrips(newTripsArray); // replaced trips in local storage
        return console.log(`New trip ${trip.title} saved and added to local storage, with id: ${trip.id}`); //todo ensure correct keys
    }
    const oldTrip = savedTrips[existingTripIndex]; // check for existing trip
    console.log(`Trip found for ${trip.id}, trip found: ${oldTrip.title}`);

    // if editing an existing trip and id already exists
    newTripsArray[existingTripIndex] = { ...oldTrip, ...trip }; // Update the trip
    saveTrips(newTripsArray);

    return console.log(`Edited trip. Changed title from ${oldTrip.title} to ${trip.title}, ${oldTrip.startDate} to ${trip.startDate}, ${oldTrip.endDate} to ${trip.endDate}, ${oldTrip.destination} to ${trip.destination}.`)


}