import { useState, useEffect } from "react";
import TripFormComponent from './TripFormComponent';
import { addTrip, updateTrip } from "../../reducers/tripSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './TripForm.css'; 
import { v4 as uuidv4 } from 'uuid'; // used for new trips

const TripForm = () => {
  const { tripId } = useParams(); // Get tripId from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const trips = useSelector((state) => state.trips.trips); // get trips from Redux store
  const existingTrip = tripId ? trips.find((trip) => trip.id === tripId) : null; // Find the trip by ID if tripId exists

  const [trip, setTrip] = useState(
    existingTrip || { id: uuidv4(), title: "", startDate: "", endDate: "", destination: "" }
  ); /*!  added uuidv4 to generate unique ID for new trip //Rebecca */

  const [errorMessage, setErrorMessage] = useState(""); 

  // If editing, load the trip data
  useEffect(() => {
    if (tripId && existingTrip) {
      setTrip(existingTrip);
    }
  }, [tripId, existingTrip]);

  const handleChange = (field, value) => {
    setTrip({ ...trip, [field]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (trip.title.trim() !== "" && trip.startDate.trim() !== "" && trip.endDate.trim() !== "" && trip.destination.trim() !== "") {
      if (tripId) {
        dispatch(updateTrip(trip)); // Update existing trip
      } else {
        dispatch(addTrip(trip)); // Add new trip
      }

      setTrip({ id: uuidv4(), title: "", startDate: "", endDate: "", destination: "" });
      setErrorMessage("");
      navigate("/alltripsview");
    }
    else {
      setErrorMessage("Please fill out all fields before submitting.");
    }
  };

  const handleCancel = () => {
    navigate("/alltripsview"); // Redirect instead of resetting
  };
  
  return (
    <div className="card-content">
      <TripFormComponent
        trip={trip}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        isEditing={!!tripId}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default TripForm;

