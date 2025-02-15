import { useState, useEffect } from "react";
import TripFormComponent from './TripFormComponent';
import { addTrip, updateTrip } from "../../reducers/tripSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './TripForm.css'; 


const TripForm = () => {
  const { tripId } = useParams(); // Get tripId from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const trips = useSelector((state) => state.trips.trips); // get trips from Redux store
  const existingTrip = trips.find((trip) => trip.id === tripId); // Find the trip by ID


  const [trip, setTrip] = useState(
    existingTrip || { title: "", startDate: "", endDate: "", destination: "" }
  );

 /*  const [destinations, setDestinations] = useState([]); */ // necessary?
  const [errorMessage, setErrorMessage] = useState(""); 

    // If editing, load the trip data
    useEffect(() => {
      if (existingTrip) {
        setTrip(existingTrip);
      }
    }, [existingTrip]);

  const handleChange = (field, value) => {
    setTrip({ ...trip, [field]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trip.title.trim() !== "" && trip.startDate.trim() !== "" && trip.endDate.trim() !== "" && trip.destination.trim() !== "") {
      if (existingTrip) {
        dispatch(updateTrip(trip)); // Update existing trip
      } else {
        dispatch(addTrip(trip)); // Add new trip
      }

      setTrip({ title: "", startDate: "", endDate: "", destination: "" });
      setErrorMessage("");
      navigate("/alltripsview");
    }
    else {
      setErrorMessage("Please fill out all fields before submitting.");
    }
  };

  const handleCancel = () => {
    navigate("/alltripsview"); // ✅ Redirect instead of resetting
  };
  

  return (
    <div className="card-content">
      <TripFormComponent
        trip={trip}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        isEditing={false}
        errorMessage={errorMessage}
      />
    </div>
  );
};



export default TripForm;