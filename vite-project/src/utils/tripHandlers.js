import { saveTrip } from "./storage";

export function handleTripSubmission(event) {
    event.preventDefault();
    console.log("Submitted");

    const form = event.target; // The form element
    const formData = new FormData(form);

    const trip = {
        title: formData.get("title"),
        startDate: formData.get("startDate"),
        endDate: formData.get("endDate"),
        destination: formData.get("destination"),
        id: formData.get("id"), // This allows editing an existing trip
    };

    saveTrip(trip);
}