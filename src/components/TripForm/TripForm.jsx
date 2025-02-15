import { useState, useEffect } from "react";
import ActivityFormComponent from './TripFormComponent';
import { getTrips } from "../../utils/storage";
import { handleTripSubmission } from "../../utils/tripHandlers";
import { useNavigate } from "react-router-dom";
import './TripForm.css'; 


const TripForm = () => {
  const [activity, setActivity] = useState({ title: "", startDate: "", endDate: "", destination: "" });
  const [destinations, setDestinations] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

    //! Load trips from local storage on component mount
    useEffect(() => {
      const savedTrips = getTrips();
      if (savedTrips) {
        setDestinations(savedTrips);
      }
    }, []);

  const handleChange = (field, value) => {
    setActivity({ ...activity, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activity.title.trim() !== "" && activity.startDate.trim() !== "" && activity.endDate.trim() !== "" && activity.destination.trim() !== "") {
      handleTripSubmission(activity); // Pass activity directly
  
      const newDestination = { ...activity };
      console.log(`New destination added: ${newDestination.title}`);
      setDestinations([...destinations, newDestination]);
      setActivity({ title: "", startDate: "", endDate: "", destination: "" });
      setErrorMessage("");
      navigate("/alltripsview");
    }
    else {
      setErrorMessage("Please fill out all fields before submitting.");
    }
  };

  const handleCancel = () => {
    setActivity({ title: "", startDate: "", endDate: "", destination: "" });
  };

  return (
    <div className="card-content">
      <ActivityFormComponent
        activity={activity}
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